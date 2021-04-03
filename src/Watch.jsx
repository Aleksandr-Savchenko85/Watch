import React, { useState, useEffect } from 'react';


const Watch = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID)
        }
    });

    let tick = () => {
        setDate(new Date())
    };


    return (
        <div className="watch">{date.toLocaleTimeString()}</div>
    )
};


export default Watch
    ;