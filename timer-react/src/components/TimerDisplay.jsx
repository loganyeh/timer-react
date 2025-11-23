

function TimerDisplay() {

    return(
        <>
            <div className="h-3/5 w-full flex justify-center items-center relative">
                <div className="h-11/12 w-11/12 flex justify-center items-center mt-8 font-mono text-black text-9xl border-2 border-black rounded-4xl">
                    <span>01:30</span>
                </div>
                <span className="font-mono text-black text-4xl absolute bottom-5 right-56.5">M</span>
                <span className="font-mono text-black text-4xl absolute bottom-5 right-37.5">S</span>
            </div>
        </>
    )
}

export default TimerDisplay;