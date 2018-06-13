export function increment(){
  return{
    type: "Increment"
  };
}
export function decrement(){
  return{
    type: "Decrement"
  };
}

export const findrestaurant = (search) => {
  return {
      type: 'Search',
      search: search, 
  };
}; 


export const Addingfood = (fname,Fqty,fprice) => {
  return {
      type: 'AddFood', 
      payload: { fname: fname,Fqty: Fqty,fprice: fprice}
  };
}; 



