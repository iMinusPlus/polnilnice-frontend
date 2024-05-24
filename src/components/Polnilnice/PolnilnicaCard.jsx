import React, {useEffect, useState} from 'react';

function PolnilnicaCard(item) {
    // console.log(item);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        console.log("Fetching address...");
        const fetchAddress = async () => {
            const res = await fetch(`http://52.174.127.46:3000/address/${item.item.address}`);
            const data = await res.json();
            console.log(data);
            setAddress(data);
        };

        fetchAddress();
    }, [item.item.address]);

    return (
        <div
            className="card w-full shadow-xl rounded-lg overflow-hidden m-4 p-4 bg-base-100">
            <div className="card-body">
                <h2 className="card-title mb-2">{address.title}</h2>
                <p>{address.town} - {address.country}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
}

export default PolnilnicaCard;