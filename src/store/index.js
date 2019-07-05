import C from '../constants'
import appReducer from './reducers' // appReducer is the default name returned by combineReducers()
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

// Custom middleware to log store changes to console:
const consoleMessages = store => next => action => {
    let result;
    console.groupCollapsed(`dispatching action => ${action.type}`) // Allows for collapsable console outputs!!
    result = next(action);
    let { metCollection, likes, titles, errors } = store.getState();
    console.log(`
        Met Collection Size: ${metCollection.length}
        Likes: ${likes}
        fetching: ${titles.fetching}
        suggestions: ${titles.suggestions}
        errors: ${errors}
    `)
    console.groupEnd();

    return result;
}

export default (initialState={}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
}