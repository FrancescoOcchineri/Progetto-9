const initialState = {
    rock: [],
    pop: [],
    hip: [],
};

export default function songsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ROCK':
            return {
                ...state,
                rock: action.payload,
            };
        case 'GET_POP':
            return {
                ...state,
                pop: action.payload,
            };
        case 'GET_HIP':
            return {
                ...state,
                hip: action.payload,
            };

        default:
            return state;
    }
}
