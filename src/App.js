import React from 'react'
import { NavBar } from './UI/NavBar'
import Collection from './Containers/Collection'
import { Provider } from 'react-redux'

// App combines components into a single page, which is rendered from index.js
class App extends React.Component {
    getMetCollection() {
        console.log('hey')
        return store.getState().metCollection
    }
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Provider store={store}>
                {/* // Data is passed here to the Collection class as a prop,
                    // then received in render() within the class.
                    // NOTE: This prop name should match what render() expects!! */}
                    <Collection />
                </Provider>
            </React.Fragment>
        )
    }
}

export default App