
const defaultState = { 
    search: 'FindRestaurant', 
}; 

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'Search': 
            return Object.assign({}, state, {  
                search: action.search, 
            }); 
        default:
            return state;
    }
}