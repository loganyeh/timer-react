import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { MyContext } from './MyContext';

function StartStop() {
    const {minutes, setMinutes, seconds, setSeconds} = useContext(MyContext);

    const printMinute = () => {
        console.log(minutes);
    }

    return (
        <>
            <div onClick={printMinute} className={`h-32 w-32 bottom-8 right-20 absolute flex justify-center items-center font-mono text-black text-4xl border-2 border-blue-600 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer`}>ST/SP</div>
        </>
    )
}

export default StartStop;