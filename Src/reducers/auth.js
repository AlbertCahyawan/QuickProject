 const defaultState = {
    isLoggedIn: true,
    id:'',
    email: '', 
    firstname: '',
    lastname: '',
    phonenumber: '',
    profileimage:'Profile-Template.png',
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                id:action.id,
                email: action.email, 
                firstname: action.firstname, 
                lastname: action.lastname, 
                phonenumber: action.phonenumber,  
                profileimage: action.profileimage,
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                email: '',   
                firstname: '', 
                lastname: '', 
                phonenumber: '',  
                profileimage:'Profile-Template.png',
            }); 
        default:
            return state;
    }
}