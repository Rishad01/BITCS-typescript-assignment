import React from "react";
import '../style.css';
interface Props{
    reset:()=>void;
}
const ResetButton:React.FC<Props>=({reset})=>
{
    return(
        <div>
            <button className="button" style={{backgroundColor:"red"}} onClick={reset}>Reset</button>
        </div>
    );
}

export default ResetButton;