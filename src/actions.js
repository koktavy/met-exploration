import C from './constants'
import fetch from 'isomorphic-fetch'
import ids from './met-objects.json';

export const addArt = (
    newArt) =>
    /* Add other function logic here if desired*/ ({
    type: C.ADD_ART,
    payload: {
        "objectID": newArt.objectID,
        "artistDisplayName": newArt.artistDisplayName,
        "title": newArt.title,
        "objectDate": newArt.objectDate,
        "medium": newArt.medium,
        "dimensions": newArt.dimensions,
        "department": newArt.department,
        "primaryImageSmall": newArt.primaryImageSmall,
        "flipped": false
    }
})

// Take a given `value` string and use the Met API's search to find objectIDs,
// then request each ID for the art's title and dispatch as an array of suggestions.
export const addToCollection = value => dispatch => {
    // Run .map on this array, fetching each object and adding it to the metCollection state
    const objectsToFetch = [];
    // Is this ok in redux?
    for (let i = 0; i < value; i++) {
        let index = Math.ceil(Math.random() * ids.objectIDs.length)
        objectsToFetch.push(ids.objectIDs[index])
    }
    // Take our array of IDs, fetch each art piece, and map them into an array of new promises to add to the store collection
    let collection = objectsToFetch.map(id =>
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
        .then(artData => artData.json()) // Parse each promise response into JSON.   
        .then(artJson =>
            dispatch({
                type: C.ADD_ART,
                payload: artJson
            })
        )
        .catch(error => {
            dispatch(
                addError(error.message)
            )
        })
    )
}

export const removeArt = (objectID) => {
    return {
        type: C.REMOVE_ART,
        payload: objectID
    }
}

export const addLike = (likes) => ({ // Arrow functions automatically return the other side of the arrow, such as an object here.
    type: C.LIKE,
    payload: likes
})

export const addError = (errorMessage) => ({
    type: C.ADD_ERROR,
    payload: errorMessage
})

export const clearError = (errorIndex) => ({
    type: C.CLEAR_ERROR,
    payload: errorIndex
})

export const changeSuggestions = (suggestions) => ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
})

export const clearSuggestions = () => ({
    type: C.CLEAR_SUGGESTIONS,
    payload: []
})

export const randomLikes = () => (dispatch, getState) => {
    if (!getState().titles.fetching) {
        dispatch({
            type: C.FETCH_TITLES
        })

        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING
            })
        }, 1000)    
    }
}

// Take a given `value` string and use the Met API's search to find objectIDs,
// then request each ID for the art's title and dispatch as an array of suggestions.
export const searchCollection = value => (dispatch) => {
    dispatch({
        type: C.FETCH_TITLES
    })

    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + value) // Get search results
        .then(response => response.json()) // Isomorphic-fetch returns a promise, allowing asyncronous responses.
        .then(fullResponse => {
            // Take the resulting JSON object, fetch each art piece, and map them into an array of new promises
            let collection = fullResponse.objectIDs.map(id => // Collection is a pile of fetch promise responses
                fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
                .then(response => response.json())) // Parse each promise response into JSON.                
            Promise.all(collection).then(results => {
                let titles = results.map(art => art.title)
                console.log(titles)
                dispatch({
                    type: C.CHANGE_SUGGESTIONS,
                    payload: titles // The Met API returns JSON with a total, and an array of objectIDs.
                })
            })
        })
        .catch(error => {
            dispatch(
                addError(error.message)
            )
            dispatch({
                type: C.CANCEL_FETCHING
            })
        })
}

export const suggestTitles = collection => (dispatch) => {
    
}