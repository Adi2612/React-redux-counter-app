import React from 'react'
import PropTypes from 'prop-types'


const Shows = ({ id  , increment , decrement }) => (
    <div>
    <h1> {id} </h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
)

Shows.PropTypes = {
    id : PropTypes.number.isRequired,
    increment : PropTypes.func.isRequired,
    decrement : PropTypes.func.isRequired
}

export default Shows

