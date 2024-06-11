import React, {useEffect, useRef, useState} from 'react';
import PolnilnicaCard from "./PolnilnicaCard";
import AppBar from "../AppBar";
import Footer from "../Footer";
import {UserContext} from "../../context/userContext";
import stringSimilarity from "string-similarity";

function PolnilniceList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [searching, setSearching] = useState(false);
    const [searchResults, setSearchResults] = useState();

    const {userData} = React.useContext(UserContext);

    const timeoutId = useRef(null);

    // Access a specific address using its title
    function getAddressByTitle(title) {
        let specificAddress;
        let t = Object.values(userData.addresses).map(address => address.title.toLowerCase());
        let bestMatch = stringSimilarity.findBestMatch(title.toLowerCase(), t).bestMatch;

        if (bestMatch.rating > 0.1) { // you can adjust this threshold as needed
            let bestMatchTitle = bestMatch.target;
            for (let key in userData.addresses) {
                if (userData.addresses[key].title.toLowerCase() === bestMatchTitle) {
                    specificAddress = userData.addresses[key];
                    break;
                }
            }
            setSearchResults(specificAddress);
            setSearching(true);
            return specificAddress;
        }

        setSearching(false);
        return null; // or some default value
    }

    useEffect(() => {
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
            <div className="flex flex-col sm:flex-row justify-between items-center p-5">
                <h1 className="text-2xl sm:text-4xl font-bold mb-4 mt-4 text-white">Polnilnice:</h1>
                <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
                    <form className="flex" onSubmit={(e) => {
                        e.preventDefault();
                        getAddressByTitle(searchTerm);
                    }}>
                        <input
                            type="text"
                            onChange={e => setSearchTerm(e.target.value)}
                            className="grow w-full"
                            placeholder="Search"
                        />
                        <button type="submit" className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd"
                                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </form>
                </label>
            </div>
            {
                !searching && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-6 bg-neutral">
                        {data.map((item, index) => (<PolnilnicaCard key={index} item={item}/>))}
                    </div>
                )
            }{
            searching && (
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mx-auto md:mx-auto gap-4 mr-6 bg-neutral">
                    {data.filter(item => item.address === searchResults._id).map((item, index) => (
                        <PolnilnicaCard key={index} item={item}/>))}
                </div>
            )
        }
            <Footer/>
        </div>
    );
}

export default PolnilniceList;