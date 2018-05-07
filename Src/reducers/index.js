
import {combineReducers} from 'redux'; 
import countReducer from './countReducer.js'; 
import auth from './auth.js'; 
 
const Reducer = combineReducers({ 
  count: countReducer,
  auth, 
});

export default Reducer;

  