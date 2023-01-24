import { useEffect, useState } from "react";
import { generateActors } from "../components/utils";

let useMovieActors = (path, action) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(generateActors(path))
        .then(res => res.json())
        .then(action || setData)
        .catch(setError)
    }, [path, action])

    return {
        data,
        error
    }
}

export default useMovieActors;