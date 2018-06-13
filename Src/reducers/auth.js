import { NavigationActions } from 'react-navigation';

const defaultState = {
    isLoggedIn: false,
    email: '', 
    firstname: '',
    lastname: '',
    phonenumber: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                email: action.email, 
                firstname: action.firstname, 
                lastname: action.lastname, 
                phonenumber: action.phonenumber,  
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                email: '',   
                firstname: '', 
                lastname: '', 
                phonenumber: '',  
            }); 
        default:
            return state;
    }
}