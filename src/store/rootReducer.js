import {combineReducers} from 'redux';
import movies from './movie/reducer';


const rootReducer = combineReducers({
    movies,
})

export default rootReducer;