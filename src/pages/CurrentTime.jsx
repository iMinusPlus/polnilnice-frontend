import React, { useEffect, useState } from 'react';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-base-100 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{"--value": currentTime.getHours()}}></span>
                </span>
                        hours
            </div>
            <div className="flex flex-col p-2 bg-base-100 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{"--value": currentTime.getMinutes()}}></span>
                </span>
                        min
            </div>
            <div className="flex flex-col p-2 bg-base-100 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{"--value": currentTime.getSeconds()}}></span>
                </span>
                        sec
            </div>
        </div>
    );
}

export default CurrentTime;
