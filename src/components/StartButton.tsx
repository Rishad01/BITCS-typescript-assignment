import React from "react";
import '../style.css';
interface Props{
    startStopwatch:()=>void;
}
const StartButton:React.FC<Props>=({startStopwatch})=>
{
    return(
        <div>
            <button className="button" onClick={startStopwatch}>Start</button>
        </div>
    );
}

export default StartButton;