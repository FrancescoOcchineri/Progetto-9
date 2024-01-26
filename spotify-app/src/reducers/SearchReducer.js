export default function detailReducer(state = [], action) {
    switch (action.type) {
        case 'GET_SEARCH':
            return {
                ...state,
                search: action.payload,
            };

        default:
            return state;
    }
}