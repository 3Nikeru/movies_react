import { GET_MOVIE } from "./types";

export const getMovie = (payload) =>{
    return {
        type: GET_MOVIE,
        payload
    }
}