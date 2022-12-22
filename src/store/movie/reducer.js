import { FOUND_MOVIE, SET_DETAILS, SET_POPULAR } from "./types";

const initialState = {
    popular: [],
    search: [],
    details: {}
};

const movies = (state = initialState, action)=>{
    switch(action.type){
        case SET_POPULAR:
            return {
                ...state,
                popular: action.payload,
            };
        case FOUND_MOVIE:
            return {
                ...state,
                search: action.payload
            };
        case SET_DETAILS:
                return {
                    ...state,
                    details: action.payload
            };
        default:
            return state;
    }
}

export default movies