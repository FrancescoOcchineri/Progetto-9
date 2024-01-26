export default function libraryReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_LIBRARY':
            return {
                ...state,
                library: {
                    ...state.library,
                    [action.payload.title]: action.payload,
                },
            };

        default:
            return state;
    }
}

