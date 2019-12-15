import fetch from 'isomorphic-fetch'

const parseResponse = response => response.json()

const logError = error => console.error(error)

const fetchThenDispatch = (dispatch, url, method, body) =>
    fetch(url, {method, body, headers: { 'Content-Type': 'application/json' }})
        .then(parseResponse)
        .then(dispatch)
        .catch(logError)

export const addNews = (title, description) => dispatch =>
    fetchThenDispatch(
        dispatch,
        '/api/news',
        'POST',
        JSON.stringify({title, description})
    )

// export const loadFile = (files) => dispatch =>
//     fetchThenDispatch(
//         dispatch,
//         '/api/uploads',
//         'POST',
//         JSON.stringify({files})
//     )

export const removeNews = id => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/news`,
        'DELETE',
        JSON.stringify({id})
    )

export const editNews = (id, title, description) => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/news`,
        'PUT',
        JSON.stringify({id, title, description})
    )
