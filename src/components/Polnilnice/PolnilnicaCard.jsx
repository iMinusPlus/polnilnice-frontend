import React, {useEffect, useState} from 'react';
import {UserContext } from "../../context/userContext";
import ConnectionModal from "./ConnectionModal";

function PolnilnicaCard(item) {
    // console.log(item);
    const [address, setAddress] = useState([]);
    const [connections, setConnections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const {userData, setUserContext} = React.useContext(UserContext);


    useEffect(() => {
        // console.log("Fetching address...");
        const fetchAddress = async () => {
            const res = await fetch(`http://52.174.127.46:3000/address/${item.item.address}`);
            const data = await res.json();
            // console.log(data);
            setAddress(data);

            // Merge the new address with the existing addresses in the context
            setUserContext(prevContext => ({
                ...prevContext,
                addresses: { ...prevContext.addresses, [item.item.address]: data }
            }));
        };
        fetchAddress();
    }, [item.item.address]);

    const fetchConnections = async () => {
        setConnections([]); // Clear the connections state
        // document.getElementById('my_modal_4').showModal();
        setIsLoading(true);
        const fetchPromises = item.item.connections.map(connectionId =>
            fetch(`http://52.174.127.46:3000/connection/${connectionId}`).then(res => res.json())
        );
        const data = await Promise.all(fetchPromises);
        setConnections(data);
        setIsLoading(false);
        setShowModal(true); // Show the modal
    };

    return (
        <>
            <div
                className="card w-full shadow-xl rounded-lg overflow-hidden m-4 p-4 bg-base-100">
                <div className="card-body">
                    <h2 className="card-title mb-2">{address.title}</h2>
                    <p>{address.town} - {address.country}</p>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={fetchConnections}>Show connections</button>
                    </div>
                </div>
            </div>

            <ConnectionModal connections={connections} chargingStation={address} id={"my_modal_4"} show={showModal} onClose={() => setShowModal(false)}/>
        </>
    );
}

export default PolnilnicaCard;