import { useEffect, useState } from "react";
import { generateApiUrls } from "../components/utils";


let useMoviesData = (path) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(generateApiUrls(path))
        .then(res => res.json())
        .then(setData)
        .catch(setError)
    }, [path])

    return {
        data,
        error
    }
}

export default useMoviesData;