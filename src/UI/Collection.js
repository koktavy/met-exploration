import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { collectionStyle } from './collectionStyle'
import Button from '@material-ui/core/Button'
import  { ArtCard } from './Artwork'
import { LoadMoreButton } from './LoadMoreButton'
import { addArt, addToCollection } from '../actions'

class CollectionComponent extends React.Component {
    componentDidMount() {
        store.dispatch(addToCollection(20))
        {/* this.setState({loading: true}) */}
        // fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/359367')
        //     .then(data => data.json())
        //     .then(data => store.dispatch(addArt(data)))
        //     .catch(err => console.log(err)) // Error handling is a best practice
    }
    
    render() {
        const { classes, metCollection } = this.props
        // const { data } = this.state
        return (
            <React.Fragment>
                <div className={classes.flexContainer}>
                    {metCollection.map( // Map is a higher-order way to iterate an array and handle each index item.
                        art =>
                            <ArtCard
                                // These art.values are named as per the Met API values
                                key={art.objectID}
                                artist={art.artistDisplayName}
                                title={art.title}
                                date={art.objectDate}
                                medium={art.medium}
                                dimensions={art.dimensions}
                                department={art.department}
                                image={art.primaryImageSmall}
                                flipped={art.flipped} // This one may error on real data
                            />
                    )}
                </div>
                <LoadMoreButton />
            </React.Fragment>
        )
    }
}

export const Collection = withStyles(collectionStyle)(CollectionComponent)