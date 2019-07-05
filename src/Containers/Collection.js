import { Collection } from '../UI/Collection'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        metCollection: state.metCollection
    }
}

// mapDispatchToProps for addArt // UI knows nothing about the store

export default connect(mapStateToProps, null, null)(Collection)
