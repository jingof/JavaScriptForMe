import { useState, useEffect } from "react";
const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Invalid end point at server end");
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                setData(null);
            });
    }, [url]);
    return {data, isPending, error}
}

export default useFetch;