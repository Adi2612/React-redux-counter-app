import  { connect } from 'react-redux'
import {increment , decrement} from '../actions'
import  Shows  from '../components/show'

const mapStateToProps = state => ({
    id : state.toggle
})

const mapDispatchToProps = dispatch => ({
    increment :  () => dispatch(increment),
    decrement : () => dispatch(decrement)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shows)
