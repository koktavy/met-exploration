import C from '../constants'
import { combineReducers } from 'redux'

export const likes = (state=0, action) =>
    action.type === C.LIKE ? parseInt(action.payload) : state

export const artwork = (state=null, action) =>
    action.type === C.ADD_ART ? action.payload : state;

export const metCollection = (state=[], action) => {
    switch(action.type) {
        case C.ADD_ART:
            // For each item of the state, call artwork and check that the resulting ID does not match this ID.
            const artExists = state.some(testAdd => testAdd.objectID === action.payload.objectID);
            return (artExists) ? 
            state :
            [...state, artwork(null, action)]; // Artwork expects an artwork AS the state, not a collection, so pass null
        case C.REMOVE_ART:
            return state.filter(testRemove => testRemove.objectID !== action.payload); // The payload here is simply the objectID.
        default:
            return state;
    }
}

export const errors = (state=[], action) => {
    switch(action.type) {
        case C.ADD_ERROR:
            return [...state, action.payload];
        case C.CLEAR_ERROR:
            return state.filter((value, i) => i !== action.payload); // Index is the 2nd arg for a .filter callback
        default:
            return state;
    }
}

export const fetching = (state=false, action) => {
    switch(action.type) {
        case C.FETCH_TITLES:
            return true;
        case C.CANCEL_FETCHING:
            return false;
        case C.CHANGE_SUGGESTIONS:
            return false;
        default:
            return state;
    }
}

export const suggestions = (state=[], action) => {
    switch(action.type) {
        case C.CLEAR_SUGGESTIONS:
            return [];
        case C.CHANGE_SUGGESTIONS:
            return action.payload;
        default:
            return state;
    }
}

// This reducer should match the shape of the initialState.json object:
export default combineReducers({
    metCollection,
    likes,
    titles: combineReducers({
        fetching,
        suggestions
    }),
    errors
})