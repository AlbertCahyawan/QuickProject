
const defaultState = { 
    bill:[]
}; 

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'AddFood': 
            return Object.assign({}, state, {  
                bill: [...state.bill, action.payload] 
            }); 
        default:
            return state;
    }
}

 