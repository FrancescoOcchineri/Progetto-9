export default function detailReducer(state = [], action) {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload,
            };

        default:
            return state;
    }
}