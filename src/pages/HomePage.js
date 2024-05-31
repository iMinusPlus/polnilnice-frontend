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
                <p>TEST</p>
                <p className="display-6 lead text-error text-center">PAGE UNDER CONSTRUCTION</p>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;