import {useNavigate} from "react-router";
import {useEffect} from 'react'

const AutoRedirect = () => {

    const navigate = useNavigate();
    // navigate("/examples")
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/examples')
        }, 5000)

        return() => {clearTimeout(timer)}

    }, [])


    return (
        <>
            <h1 className="text-center text-2xl mb-4">
                Redirecting in 5 seconds...
            </h1>
        </>
    )

}
export default AutoRedirect