 let count= 0;  

export default function(state=count, action){
  switch (action.type) {
    case "Increment": state++;
      break;
    case "Decrement": state--;
      break;
  }
  return state;
}