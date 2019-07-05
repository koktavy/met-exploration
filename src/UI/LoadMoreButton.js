import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { loadMoreButtonStyle } from './loadMoreButtonStyle'
import Button from '@material-ui/core/Button'
import { addToCollection } from '../actions'

class LoadMoreButtonComponent extends React.Component {    
    growCollection = () => {
        store.dispatch(addToCollection(5))
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.flexContainer}>
                <Button variant="outlined" className={classes.button} onClick={this.growCollection}>
                    Load More
                </Button>
            </div>
        )
    }
}

export const LoadMoreButton = withStyles(loadMoreButtonStyle)(LoadMoreButtonComponent)