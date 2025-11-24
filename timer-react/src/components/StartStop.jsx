import { useState, useRef, useEffect, createContext } from 'react';

function StartStop() {
    return (
        <>
            <div className={`h-32 w-32 bottom-8 right-20 absolute flex justify-center items-center font-mono text-black text-4xl border-2 border-blue-600 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer`}>ST/SP</div>
        </>
    )
}

export default StartStop;