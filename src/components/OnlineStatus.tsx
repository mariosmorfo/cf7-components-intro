import {useState, useEffect} from 'react';

const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handler = () => setIsOnline(navigator.onLine);

        const pollingId: number = setInterval(handler, 5000)

        window.addEventListener("online", handler)
        window.addEventListener("offline", handler)

        return() => {
            clearInterval(pollingId)
            window.removeEventListener("online", handler)
            window.removeEventListener("offline", handler)
        }

    }, [])
    return (
        <>
            <div className={`text-white text-center mt-10 rounded mx-40 p-4 ${isOnline ? "bg-green-500" : "bg-red-500"}`}>
                {isOnline ? "You are online!" : "You are offline!"}
            </div>
        </>
    );

}

export default OnlineStatus;