import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/actions'

const business = ({ counter, Add, Sub }) => {
  return (
    <div>
      <NavLink activeClassName='active' to='/contact'>
        business
      </NavLink>
      <span>{counter}</span>
      <button onClick={ Add }>+</button>
      <button onClick={Sub }>-</button>
    </div>
  )
}


const mapStatetoProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStatetoProps, mapDispatchToProps)(business)
