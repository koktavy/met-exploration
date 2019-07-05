import C from './constants'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import storeFactory from './store'
import defaultState from './initialState.json'
import App from './App'
import { mapStateToProps } from './Containers/Collection'

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) : defaultState

const saveState = () => localStorage['redux-store'] = JSON.stringify(store.getState())

const store = storeFactory(initialState); // storeFactory is the default export from index.js in the store folder
// store.subscribe(mapStateToProps);

window.store = store // This is a debug line making store accessible by console

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)



// store.dispatch(
//     addArt(9001, 'https://images.metmuseum.org/CRDImages/dp/web-large/DP104119.jpg', 
//         'Drawings and Prints', 'Valve Time 4 Ever', "Gabe Newell", "2019", "The future",
//         "9", "Anticipation", ["HL3VR"])
// );

// store.dispatch(
//     removeArt(9001)
// );

// store.dispatch(
//     addLike(5)
// );

// store.dispatch(
//     addError("something went wrong!")
// );

// store.dispatch(
//     clearError(0)
// );

// store.dispatch(
//     changeSuggestions(['1', 'two', 'Index'])
// )

// store.dispatch(
//     clearSuggestions()
// )



// setInterval(() => {
//     store.dispatch({
//         type: C.LIKE,
//         payload: store.getState().likes + 1
//     })
// }, 250)

// store.dispatch({
//     type: C.ADD_ART,
//     payload: {
//         "objectID": 9001,
//         "primaryImageSmall": "https://images.metmuseum.org/CRDImages/dp/web-large/DP104119.jpg",
//         "department": "Drawings and Prints",
//         "title": "Valve Time 4 Ever",
//         "artistDisplayName": "Gabe Newell",
//         "objectDate": "2019",
//         "medium": "The future",
//         "dimensions": "9",
//         "classification": "Anticipation",
//         "tags": [
//         "HL3VR"
//         ]
//     }
// });

// setTimeout(() => {
//     updateSubscription();
// }, 3000);