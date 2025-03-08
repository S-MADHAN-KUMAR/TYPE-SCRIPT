//  FUNCTION

function getSearchProducts<T>(products:T[]):T{
    // do some database operations 
    const myIndex = 3
    return products[myIndex]
}


// ARROW FUNCTION

const getMoreSearchProducts = <T,> (products:T[]):T =>{
  // do some database operations  
  const myIndex = 3
  return products[myIndex]
}


//               ',' it mean its generics function