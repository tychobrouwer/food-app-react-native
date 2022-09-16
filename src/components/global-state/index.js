import React from 'react';
import PropTypes from 'prop-types';

// Set up global contexts
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

// Actions
export const SET_CREDENTIALS = 'SET_CREDENTIALS';

// Reducer
export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CREDENTIALS: {
      return {
        ...state,
        credentials: payload,
      };
    }

    default:
      return state;
  }
};

function GlobalState({ initialState, dispatch, children }) {
  return (
    <GlobalStateContext.Provider value={initialState}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

GlobalState.propTypes = {
  // The state returned from setting up the reducer using the React Hook `useReducer`.
  initialState: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.any,
  ])).isRequired,
  // The dispatch function returned from setting up the reducer using the React Hook `useReducer`.
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default GlobalState;
