import React from 'react';
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons not displaying correctly
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function HomePage(props) {
    return (
        <div className="bg-neutral min-h-screen flex flex-col">
            <AppBar />
            <div className="flex-grow">
                <MapContainer
                    center={[46.55506005175182, 15.643692532583719]}
                    zoom={13}
                    style={{ height: "500px", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[46.55506005175182, 15.643692532583719]}>
                        <Popup>
                            A pretty CSS3 popup.
                        </Popup>
                    </Marker>
                </MapContainer>
                <br/>
                <p className="display-6 lead text-error text-center">PAGE UNDER CONSTRUCTION</p>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
