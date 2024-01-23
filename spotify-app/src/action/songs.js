import axios from 'axios';

export const getRock = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + 'rockclassic');
            dispatch({ type: 'GET_ROCK', payload: response.data.data });
        } catch (error) {
            console.error('Errore nella richiesta API:', error);
        }
    };
}

export const getPop = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + 'popculture');
            dispatch({ type: 'GET_POP', payload: response.data.data });
        } catch (error) {
            console.error('Errore nella richiesta API:', error);
        }
    };
}

export const getHip = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + 'hiphop');
            dispatch({ type: 'GET_HIP', payload: response.data.data });
        } catch (error) {
            console.error('Errore nella richiesta API:', error);
        }
    };
}