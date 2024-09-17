import React from "react";
import '../style.css';
interface Props{
    setLapArr:()=>void;
}
const LapButton:React.FC<Props>=({setLapArr})=>
{
    return(
        <div>
            <button className="button" onClick={setLapArr}>Set lap</button>
        </div>
    );
}

export default LapButton;