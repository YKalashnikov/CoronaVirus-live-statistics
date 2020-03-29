import {
    useState,
    useEffect
} from 'react';

function useStats(url) {
    const [stats, setStats] = useState()
    const [error, setErr] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setErr()
            console.log('fetching data')
            const data = await fetch(url)
                .then(response => response.json())
                .catch(err => {
                    console.log('asdfsadfsadf',error)
                    setErr(error)
                })
            setStats(data)
            setLoading(false)
        }
        fetchData()
    }, [url])

    return {
        stats,
        loading,
        error
    }

}
export default useStats