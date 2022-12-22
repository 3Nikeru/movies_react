import { SET_POPULAR, FOUND_MOVIE, SET_DETAILS } from "./types";

export const setPopular = (payload) =>{
    return {
        type: SET_POPULAR,
        payload
    }
}
export const foundMovie = (payload) =>{
    return {
        type: FOUND_MOVIE,
        payload
    }
}
export const setDetails = (payload) =>{
    return {
        type: SET_DETAILS,
        payload
    }
}