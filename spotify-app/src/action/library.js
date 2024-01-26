export const addLibrary = (title, duration, artist, cover_medium) => {
    return {
        type: 'ADD_LIBRARY',
        payload: {
            title,
            duration,
            artist,
            cover_medium,
        },
    };
};