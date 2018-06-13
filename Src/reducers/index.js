
import {combineReducers} from 'redux'; 
import countReducer from './countReducer.js'; 

import searchReducer from './searchReducer.js'; 
import addFoodReducer from './addFoodReducer'
import auth from './auth.js'; 
 
const Reducer = combineReducers({ 
  count: countReducer,
  auth, 
  searchReducer,
  addFoodReducer,
});

export default Reducer;

  