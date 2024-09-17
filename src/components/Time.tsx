import React from "react";
import displayTime from "../utility/displayTime";
interface Props{
    time:number;
}
const Time:React.FC<Props>=({time})=>
{


    return (
        <div>
            <h1>{displayTime(time)}</h1>
        </div>
    );
}

export default Time;