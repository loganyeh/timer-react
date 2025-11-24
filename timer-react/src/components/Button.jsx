import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { MyContext } from './MyContext';

function Button({letter, bottom, left}) {
    const {minutes, setMinutes, seconds, setSeconds} = useContext(MyContext);

    const addTimeClick = () => {
        let parseMinutes = Number(minutes);
        let parseSeconds = Number(seconds);
        if(letter === "M"){
            parseMinutes++;
            if(parseMinutes < 10){
                setMinutes("0" + parseMinutes);
            }
            else{
                setMinutes(parseMinutes);
            }
            // setMinutes(parseMinutes);
            // setMinutes(prev => prev + 1);
        }
        else{
            parseSeconds++;
            if(parseSeconds < 10){
                setSeconds("0" + parseSeconds);
            }
            else{
                setSeconds(parseSeconds);
            }
        }
    };

    return (
        <>
            <div onClick={addTimeClick} className={`h-28 w-28 absolute ${bottom} ${left} flex justify-center items-center font-mono text-black text-4xl border-2 border-blue-600 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer`}>{letter}</div>
        </>
    )
}

export default Button;