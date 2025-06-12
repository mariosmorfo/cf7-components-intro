import {useNavigate} from "react-router";
import {useEffect, useState} from 'react'

const AutoRedirectAdvanced = () => {

    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);
    // navigate("/examples")
    useEffect(() => {
        const intervalId:number = setInterval(() => {
            setSecondsLeft((prev: number) => prev - 1)
        }, 1000);
        const timer = setTimeout(() => {
            navigate('/examples')
        }, 5000)

        return() => {
            clearInterval(intervalId);
            clearTimeout(timer)
        }

    }, [])

    return (
        <>
            <h1 className="text-center text-2xl mb-4">
                Redirecting in {secondsLeft} second{secondsLeft !== 1 && "s"}...
            </h1>
        </>
    )

}
export default AutoRedirectAdvanced;