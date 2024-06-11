import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ChargingStationModal from './Polnilnice/ChargingStationModal'; // Import the custom modal component

mapboxgl.accessToken = 'pk.eyJ1IjoibnVjbGV1c2JlYXN0IiwiYSI6ImNsd2pvandmcjE0ZTEyaW83ajMwdDd3NHQifQ.3v2gWxIh8fwbkupLAabx0A';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(15.655);
    const [lat, setLat] = useState(46.5555);
    const [zoom] = useState(13);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null); // State to store selected feature

    useEffect(() => {
        if (map.current) return; // initialize map only once

        // Check if the Geolocation API is available
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // Get the user's current location
                const userLocation = [position.coords.longitude, position.coords.latitude];

                setLng(userLocation[0]);
                setLat(userLocation[1]);

                // Add a marker to the map at the user's current location
                new mapboxgl.Marker()
                    .setLngLat(userLocation)
                    .addTo(map.current);
            });
        } else {
            console.log('Geolocation API not available.');
            setLat(46.5555);
            setLng(15.655);
        }

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        // Fetch data from backend
        fetch('http://elektropolnilnice.eu:3000/address/')
            .then(response => response.json())
            .then(data => {
                const coordinates = data.map(item => ({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(item.longitude), parseFloat(item.latitude)]
                    },
                    properties: {
                        name: item.title,
                        address: `${item.postcode} ${item.town}`,
                        city: item.town,
                        country: item.country
                    }
                }));

                map.current.on('load', function () {
                    // Load an image
                    map.current.loadImage(process.env.PUBLIC_URL + '/Elektropolnilnice_Icon_256x256.ico', function (error, image) {
                        if (error) throw error;

                        // Add the image to the map
                        map.current.addImage('custom-icon', image);

                        map.current.addSource('points', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': coordinates
                            }
                        });

                        map.current.addLayer({
                            'id': 'points',
                            'type': 'symbol', // Change the type to 'symbol'
                            'source': 'points',
                            'layout': {
                                'icon-image': 'custom-icon', // Use the custom icon
                                'icon-size': 0.15 // Adjust the size as needed
                            }
                        });

                        map.current.on('click', 'points', function (e) {
                            const selectedFeature = e.features[0];
                            setSelectedFeature(selectedFeature);
                            setModalIsOpen(true); // Open modal on click
                        });

                        map.current.on('mouseenter', 'points', function () {
                            map.current.getCanvas().style.cursor = 'pointer'; // Change cursor to pointer
                        });

                        map.current.on('mouseleave', 'points', function () {
                            map.current.getCanvas().style.cursor = '';
                        });
                    });
                });
            });
    }, []);

    return (
        <>
            <div ref={mapContainer} className="map-container" />
            <ChargingStationModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                selectedFeature={selectedFeature}
            />
        </>
    );
}

export default Map;
