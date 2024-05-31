import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

mapboxgl.accessToken = 'pk.eyJ1IjoibnVjbGV1c2JlYXN0IiwiYSI6ImNsd2pvandmcjE0ZTEyaW83ajMwdDd3NHQifQ.3v2gWxIh8fwbkupLAabx0A';

function HomePage() {

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

                // Wait for the map to load before adding the source and layer
                map.current.on('load', function () {
                    map.current.addSource('points', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': coordinates
                        }
                    });

                    map.current.addLayer({
                        'id': 'points',
                        'type': 'circle',
                        'source': 'points',
                        'paint': {
                            'circle-radius': 10,
                            'circle-color': '#007cbf'
                        }
                    });
                });
            });
    }, []);

    return (
        <div className="bg-neutral min-h-screen flex flex-col">
            <AppBar/>
            <br/>
            <div className="flex-grow">
                <br/>
                <div className={"flex justify-center"}>
                    <div ref={mapContainer} className="map-container"/>
                </div>
                <p className="display-6 lead text-error text-center">PAGE UNDER CONSTRUCTION</p>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;