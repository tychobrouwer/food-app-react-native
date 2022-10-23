import React from 'react';
import PropTypes from 'prop-types';

// set up global contexts
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

// context actions
export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const SET_GROUPS = 'SET_GROUPS';
export const SET_GROUP = 'SET_GROUP';
export const SET_INVENTORY = 'SET_INVENTORY';
export const SET_GROCERY = 'SET_GROCERY';

// reducer function for setting local variables
export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CREDENTIALS: {
      return {
        ...state,
        credentials: payload,
      };
    }
    case SET_GROUPS: {
      return {
        ...state,
        groups: payload,
      };
    }
    case SET_GROUP: {
      return {
        ...state,
        group: payload,
      };
    }
    case SET_INVENTORY: {
      return {
        ...state,
        inventory: payload,
      };
    }
    case SET_GROCERY: {
      return {
        ...state,
        grocery: payload,
      };
    }

    default:
      return state;
  }
};

// return the global state component
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
  initialState: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.any,
  ])).isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default GlobalState;
