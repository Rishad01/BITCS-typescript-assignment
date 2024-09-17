import React from "react";
import '../style.css';
interface Props{
    pause:()=>void;
}
const PauseButton:React.FC<Props>=({pause})=>
{
    return(
        <div>
            <button className="button" onClick={pause}>Pause/Stop</button>
        </div>
    )
}

export default PauseButton;