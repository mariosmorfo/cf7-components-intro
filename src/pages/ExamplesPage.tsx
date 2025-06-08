import {useEffect} from 'react'

const ExamplesPage = () => {

    useEffect(() => {
        document.title = "Example Page"
    }, []);

    return(
        <>
            <h1 className="text-2xl font-bold">Example Page</h1>
        </>
    )
}

export default ExamplesPage;