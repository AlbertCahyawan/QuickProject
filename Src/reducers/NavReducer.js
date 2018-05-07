import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { MainNav } from '../Navigation/AppNavigation';

const router = MainNav.router;
const mainNavAction = router.getActionForPathAndParams('Login');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};

export default NavReducer;