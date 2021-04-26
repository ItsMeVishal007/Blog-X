// import React from 'react'

const initialState = {
  counter: 0
}

const RootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'Add':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'Sub':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export default RootReducer;
