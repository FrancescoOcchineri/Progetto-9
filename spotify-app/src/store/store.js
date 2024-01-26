import { applyMiddleware, combineReducers, createStore } from "redux";
import songs from "../reducers/songsReducer";
import { thunk } from 'redux-thunk';
import detailReducer from "../reducers/DetailReducer";
import SearchReducer from "../reducers/SearchReducer";
import LibraryReducer from "../reducers/LibraryReducer";

const state = {
    songs: {
        rock: [],
        pop: [],
        hip: [],
    },
    detail: [],
    search: [],
    library: []
}

const bigreducers = combineReducers({
    songs: songs,
    detail: detailReducer,
    search: SearchReducer,
    library: LibraryReducer
})

export const store = createStore(bigreducers, state, applyMiddleware(thunk))