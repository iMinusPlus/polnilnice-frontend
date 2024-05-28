import React from "react";


function ConnectionModal({connections, id, show, onClose}) {

    const handleClose = () => {
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <dialog id={id} className="modal" open>
            <div className="modal-box">
            {connections.map((connection, index) => (
                <>
                    <h3 key={"title-" + index} className="font-bold text-lg">Connection {index}</h3>
                    <p key={"power-" + index}>Power: {connection.powerKW} KW</p>
                    <p key={"amps-" + index}>Ampere: {connection.amps} Ah</p>
                    <p key={"volts-" + index}>Voltage: {connection.voltage} V</p>
                </>
            ))}

            <div className="modal-action">
                <form method="dialog">
                    <button className="btn" onClick={handleClose}>Close</button>
                </form>
            </div>
            </div>
        </dialog>
    );
}

export default ConnectionModal;