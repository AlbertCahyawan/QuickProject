import { NavigationActions } from 'react-navigation';

  
export const login = (email,firstname,lastname,phonenumber) => {
    return {
        type: 'LOGIN',
        email:email,
        firstname:firstname,
        lastname:lastname,
        phonenumber:phonenumber, 
    };
};
 
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
    