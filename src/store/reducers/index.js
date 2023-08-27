import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movie: movieReducer,
});

export default rootReducer;
