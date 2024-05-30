import React, {useEffect, useState} from 'react';
import PolnilnicaCard from "./PolnilnicaCard";
import AppBar from "../AppBar";
import Footer from "../Footer";

function PolnilniceList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("Fetching data...");
        const getPolnilnice = async function () {
            const res = await fetch("http://52.174.127.46:3000/elektropolnilnice/");
            const data = await res.json();
            setData(data);
            setIsLoading(false);
        }

        getPolnilnice().then();
    }, []);

    if (isLoading) {
        return (
            <div>
                <AppBar/>
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>

        );
    }


    return (
        <div className="mx-auto bg-neutral">
            <AppBar/>
            <p>TEST</p>

            <h1 className="text-4xl font-bold mb-4 mt-4 text-white">Polnilnice:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-6 bg-neutral">
                {data.map((item, index) => (<PolnilnicaCard key={index} item={item}/>))}
            </div>
            <Footer/>
        </div>
    );
}

export default PolnilniceList;