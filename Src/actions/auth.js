
  
export const login = (id,email,firstname,lastname,phonenumber,profileimage) => {
    return {
        type: 'LOGIN',
        id:id,
        email:email,
        firstname:firstname,
        lastname:lastname,
        phonenumber:phonenumber, 
        profileimage:profileimage,
    };
};
 
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
    