import React from "react";

const Time = () => {
    
    const time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = React.useState(time);
    const updateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time);
    } 
    setInterval(updateTime, 1000);
    return (
        <div className="Time">
            <ul>
                <li> {ctime} </li>
            </ul>
        </div>
    );
}


export default Time;