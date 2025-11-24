import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { MyContext } from './MyContext';

function Button({letter, bottom, left}) {
    const {minutes, setMinutes, seconds, setSeconds} = useContext(MyContext);

    const addTimeClick = () => {
        let parseMinutes = Number(minutes);
        let parseSeconds = Number(seconds);
        if(letter === "M"){
            setMinutes(prev => prev + 1);
        }
        else{
            setSeconds(prev => prev + 1);
        }
    };

    return (
        <>
            <div onClick={addTimeClick} className={`h-28 w-28 absolute ${bottom} ${left} flex justify-center items-center font-mono text-black text-4xl border-2 border-blue-600 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer`}>{letter}</div>
        </>
    )
}

export default Button;