import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { MyContext } from './MyContext';

function TimerDisplay() {
    const {minutes, setMinutes, seconds, setSeconds} = useContext(MyContext);

    const resetTimerDisplayClick = () => {
        console.clear();
        setMinutes(0);
        setSeconds(0);
    };

    return(
        <>
            <div onClick={resetTimerDisplayClick} className="h-3/5 w-full flex justify-center items-center relative cursor-pointer">
                <div className="h-11/12 w-11/12 flex justify-center items-center mt-8 font-mono text-black text-9xl border-2 border-black rounded-4xl">
                    <span>{minutes}:{seconds}</span>
                </div>
                <span className="font-mono text-black text-4xl absolute bottom-5 right-56.5">M</span>
                <span className="font-mono text-black text-4xl absolute bottom-5 right-37.5">S</span>
            </div>
        </>
    )
}

export default TimerDisplay;