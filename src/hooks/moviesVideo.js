import { useEffect, useState } from "react";
import { generateVideoApi } from "../components/utils";


let useMoviesVideo = (path, action) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(generateVideoApi(path))
        .then(res => res.json())
        .then(action || setData)
        .catch(setError)
    }, [path, action])

    return {
        data,
        error
    }
}

export default useMoviesVideo;