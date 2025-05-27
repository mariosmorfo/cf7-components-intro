import CounterButton from "./CounterButton.tsx";
import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts";

const CounterAdvancedWithCustomHooks = () => {

    const {count, lastAction, time, increase, reset, decrease} = useAdvancedCounter()
     return(
         <>

             <div className="space-y-4 pt-12 ">
                 <h1 className="text-center">Count is {count}</h1>
                 <div className="text-center space-x-4">
                     <CounterButton onClick={increase} label="Increase"/>
                     <CounterButton onClick={decrease} disabled={count === 0} label="Decrease"/>
                     <CounterButton onClick={reset} disabled={ count=== 0} label="Reset" addClass="bg-cf-dark-red" />
                 </div>
             </div>
             <p className="text-center pt-8">Last change: <strong>{lastAction || "_"}</strong> at {time}</p>
         </>
     )
 }


export default CounterAdvancedWithCustomHooks;