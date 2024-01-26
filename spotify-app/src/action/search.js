import axios from 'axios';

export const getSearch = (searchQuery) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + searchQuery);
            dispatch({ type: 'GET_SEARCH', payload: response.data.data });
        } catch (error) {
            console.error('Errore nella richiesta API:', error);
            throw error;
        }
    };
}