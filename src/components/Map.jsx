import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibnVjbGV1c2JlYXN0IiwiYSI6ImNsd2pvandmcjE0ZTEyaW83ajMwdDd3NHQifQ.3v2gWxIh8fwbkupLAabx0A';

function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(15.655);
    const [lat] = useState(46.5555);
    const [zoom] = useState(13);

    useEffect(() => {
        if (map.current) return; // initialize map only once
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
                        coordinates: [item.longitude, item.latitude]
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


                        // Create a popup, but don't add it to the map yet.
                        var popup = new mapboxgl.Popup({
                            closeButton: false,
                            closeOnClick: false
                        });

                        map.current.on('mouseenter', 'points', function (e) {
                                // Change the cursor style as a UI indicator.
                                map.current.getCanvas().style.cursor = 'pointer';

                                var coordinates = e.features[0].geometry.coordinates.slice();
                                // var description = e.features[0].properties.description;
                                var description = "hi";

                                // Ensure that if the map is zoomed out such that multiple
                                // copies of the feature are visible, the popup appears
                                // over the copy being pointed to.
                                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                                }

                                // Populate the popup and set its coordinates
                                // based on the feature found.
                                popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
                            }
                        );

                        map.current.on('mouseleave', 'points', function () {
                                map.current.getCanvas().style.cursor = '';
                                popup.remove();

                            }
                        );

                    });
                });
            });
    }, []);

    return (
        <div ref={mapContainer} className="map-container"/>
    );
}

export default Map;