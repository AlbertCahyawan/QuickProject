import { combineReducers } from 'redux';

import AppNavigation from '../Navigation/AppNavigation' 
  
const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

export default combineReducers({ 
  nav: navReducer,
});

