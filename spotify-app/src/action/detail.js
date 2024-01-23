import axios from "axios";

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://striveschool-api.herokuapp.com/api/deezer/album/` + id);
            dispatch({ type: 'GET_DETAIL', payload: response.data });
        } catch (error) {
            console.error('Errore nella richiesta API:', error);
        }
    };
};