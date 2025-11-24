import { useState, useRef, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import Button from './components/Button';
import StartStop from './components/StartStop';
import { MyContext } from './components/MyContext';

function App() {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center'>
        <div id="timer-container" className='h-1/2 w-1/3 border-4 border-blue-500 rounded-4xl relative'>
          <MyContext.Provider value={{minutes, setMinutes, seconds, setSeconds}}>
            <TimerDisplay />
            <Button letter={"M"} bottom={"bottom-8"} left={"left-14"} />
            <Button letter={"S"} bottom={"bottom-8"} left={"left-56"} />
            <StartStop />
          </MyContext.Provider>
        </div>
      </div>
    </>
  )
}

export default App
