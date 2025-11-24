import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { MyContext } from './MyContext';

function StartStop() {
    const {minutes, setMinutes, seconds, setSeconds} = useContext(MyContext);
    let sliceMinutes = "";
    let parseMinutes = 0;
    // const [parseMinutes, setParseMinutes] = useState(0);
    // const [sliceMinutes, setSliceMinutes] = useState("");

    const intervalRef = useRef(null);
    const isStart = useRef(false);

    const formatTime = () => {
        if(typeof minutes === "string"){
            sliceMinutes = minutes.slice(1);
            parseMinutes = Number(sliceMinutes);
            console.log(parseMinutes);
            console.log(typeof parseMinutes);
        }
        else{
            console.log(minutes);
            console.log(typeof minutes);
        }
        // ADD THING FOR WHEN GREATER THAN 10

    }

    const decrementTime = () => {
        isStart.current = !isStart.current;
        if(isStart.current){
            intervalRef.current = setInterval(() => {
                parseMinutes -= 1;
                setMinutes(parseMinutes);
                console.log(parseMinutes);
            }, 1000);
        }
        else{
            clearInterval(intervalRef.current);
        }
    }

    const handleClick = () => {
        formatTime();
        decrementTime();
    }

    return (
        <>
            <div onClick={handleClick} className={`h-32 w-32 bottom-8 right-20 absolute flex justify-center items-center font-mono text-black text-4xl border-2 border-blue-600 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer`}>ST/SP</div>
        </>
    )
}

export default StartStop;
