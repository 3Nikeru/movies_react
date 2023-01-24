import { FOUND_MOVIE, SET_ACTOR, SET_DETAILS, SET_POPULAR, SET_VIDEO } from "./types";

const initialState = {
    popular: [],
    search: [],
    details: {},
    video: {},
    actor: {}
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
        case SET_VIDEO:
                return {
                    ...state,
                    video: action.payload
            };
        case SET_ACTOR:
                return {
                    ...state,
                    actor: action.payload
        };
        default:
            return state;
    }
}

export default movies