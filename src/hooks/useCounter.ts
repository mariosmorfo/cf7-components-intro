import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {
    const[count, setCount] = useState(initialValue)

    const decrease = () => {
        if(count > 0){
            setCount(count - 1)
        }

    }
    const increase = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(initialValue)
    }

    return {count, increase, decrease, reset}
}

