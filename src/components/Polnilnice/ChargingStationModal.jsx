import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ChargingStationModal({ isOpen, onRequestClose, selectedFeature }) {
    if (!selectedFeature) {
        return null;
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="fixed inset-0 flex items-center justify-center p-4"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <div className="bg-base-100 rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold">{selectedFeature.properties.name}</h2>
                </div>
                <hr className={"hr-gradient"}/>
                <div className="mb-4 mt-4">
                    <p className="text-lg"><strong>Address:</strong> {selectedFeature.properties.address}</p>
                    <p className="text-lg"><strong>City:</strong> {selectedFeature.properties.city}</p>
                    <p className="text-lg"><strong>Country:</strong> {selectedFeature.properties.country}</p>
                </div>
                <div className="flex justify-end">
                    <button
                        className="btn bg-gradient-rainbow"
                        onClick={onRequestClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ChargingStationModal;
