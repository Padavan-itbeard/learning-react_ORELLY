import { useEffect, useState } from "react";

export const useFetch = ( url ) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        if (!url) return;
        fetch(url)
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [url]);

    return {
        data,
        loading,
        error
    }
}