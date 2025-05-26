import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreStates = () => {

    const [count, SetCount] = useState(0)
    const [lastAction, setLastAction] = useState("")
    const [time, setTime] = useState("")

    const getCurrentTime = () => new Date().toLocaleTimeString()

    const increaseCount = () => {
        SetCount(count + 1)
        setLastAction("Increase")
        setTime(getCurrentTime())
    }

    const resetCount = () => {
        if(count > 0) {
            SetCount(0)
            setLastAction("Reset")
            setTime(getCurrentTime())
        }
    }
    const decreaseCount = () => {
        if(count > 0) {
            SetCount(count - 1)
            setLastAction("Decrease")
            setTime(getCurrentTime)
        }
    }
    
    return(
        <>

            <div className="space-y-4 pt-12 ">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label="Increase"/>
                    <CounterButton onClick={decreaseCount} disabled={count === 0} label="Decrease"/>
                    <CounterButton onClick={resetCount} disabled={ count=== 0} label="Reset" addClass="bg-cf-dark-red" />
                </div>
            </div>
            <p className="text-center pt-8">Last change: <strong>{lastAction || "_"}</strong> at {time}</p>
        </>
    )
}

export default CounterWithMoreStates;