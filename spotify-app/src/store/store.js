import { applyMiddleware, combineReducers, createStore } from "redux";
import songs from "../reducers/songsReducer";
import { thunk } from 'redux-thunk';
import detailReducer from "../reducers/DetailReducer";

const state = {
    songs: {
        rock: [],
        pop: [],
        hip: [],
    },
    detail: []
}

const bigreducers = combineReducers({
    songs: songs,
    detail: detailReducer
})

export const store = createStore(bigreducers, state, applyMiddleware(thunk))