import React from 'react';
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Map from "../components/Map";

function HomePage() {

    return (
        <div className="bg-neutral min-h-screen flex flex-col">
            <AppBar/>
            <br/>
            <div className="flex-grow">
                <br/>
                <div className={"flex justify-center"}>
                    <Map/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;