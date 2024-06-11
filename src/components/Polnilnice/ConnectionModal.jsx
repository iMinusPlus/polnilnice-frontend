import React, {useContext} from "react";


function ConnectionModal({connections, chargingStation, id, show, onClose}) {

    const handleClose = () => {
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <dialog id={id} className="modal" open>
            <div className="modal-box">
                <h1 className="text-2xl font-bold">{chargingStation.title}</h1>
                <hr className={"hr-gradient mt-3 mb-3"}/>
                {chargingStation.country !== "null" ?
                    <div className={"badge badge-neutral m-1"}>{chargingStation.country}</div>
                    : null}
                {chargingStation.town !== "null" ?
                    <div className={"badge badge-neutral m-1"}>{chargingStation.town}</div>
                    : null}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Power</th>
                            <th>Ampere</th>
                            <th>Voltage</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {connections.map((connection, index) => (
                            <tr>
                                <th key={"number-" + index} className="font-bold text-lg">{index + 1}</th>
                                <th key={"title-" + index}>Connection {index + 1}</th>
                                <td key={"power-" + index}>{connection.powerKW} KW</td>
                                <td key={"amps-" + index}>{connection.amps} Ah</td>
                                <td key={"volts-" + index}>{connection.voltage} V</td>
                                    <td key={"status-" + index}>{index / 2 !== 1 ?
                                        <div className="badge badge-primary badge-lg"></div>
                                        :
                                        <div className="badge badge-error badge-lg"></div>
                                    }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn bg-gradient-rainbow" onClick={handleClose}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ConnectionModal;