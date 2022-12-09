import { useEffect, useState } from "react";
import { generateSearchUrl } from "../components/utils";


let useMoviesSearch = (path) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(generateSearchUrl(path))
        .then(res => res.json())
        .then(setData)
        .catch(setError)
    }, [path])

    return {
        data,
        error
    }
}

export default useMoviesSearch;