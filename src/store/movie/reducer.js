import { GET_MOVIE } from "./types";

const initialState = [];

const movies = (state = initialState, action)=>{
    switch(action.type){
        case GET_MOVIE:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

export default movies