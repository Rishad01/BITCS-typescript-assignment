import {useState,useEffect,useRef} from "react";
import Time from "./Time";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import LapButton from "./LapButton";
import Laps from "./Laps";
import displayTime from "../utility/displayTime";
import '../style.css';
const Stopwatch:React.FC=()=>
{
    const[time,setTime]=useState<number>(0);
    const[laps,setLap]=useState<string[]>([]);
    const[paused,setPause]=useState<boolean>(false);
    const[start,setStart]=useState<boolean>(false);
    let interval=useRef<any>();
    useEffect(()=>{
        if(start===true && paused===false){
        interval.current=setInterval(()=>{setTime((time)=>(time+1))},10);
        }
        else if(paused===true){
            clearInterval(interval.current);
            interval.current = null;
        }

        return () => {
            clearInterval(interval.current);
            interval.current =0;
        }
    },[start,paused]);


    const startStopwatch=()=>{
        setStart(true);
        setPause(false);
    }

    const pause=()=>{
        setPause(true);
        setStart(false);
    }

    const reset=()=>{
        setTime(0);
        if (interval.current !== null) {
            clearInterval(interval.current);
        }
        setStart(false);
        setPause(false);
        setLap([]);
    }

    const setLapArr=()=>{
        const timer=displayTime(time);
        if(!laps.includes(timer))
        setLap([...laps,timer]);
    }

    return(
        <div>
            <h1>Stopwatch</h1>
            <div>
                <h4><Time time={time}/></h4>
            </div>
            <div className="centered">
                {!start && <StartButton startStopwatch={startStopwatch} />}
                {start && <PauseButton pause={pause} />}
                {start && <LapButton setLapArr={setLapArr}/>}
                {paused && <ResetButton reset={reset} />}
            </div>
            <Laps laps={laps} />
        </div>
    )
}

export default Stopwatch;