function addTwo(num : number){
    return num+2
}

// addTwo('5')            --   wrong
// addTwo(5)               --  correct 



function getUpper(val : string){
    return val.toUpperCase()
}

// getUpper(5)            --   wrong
// getUpper('5')           --  correct   



function signUpUser1(name :string, email :string , isPaid : boolean){}
function signUpUser2(name :string, email :string , isPaid : boolean = false){}

// signUpUser(1,2,3)                                  
// signUpUser1('Ejaz','ejaz@gmail.com' ,false )           
// signUpUser2('Ejaz','ejaz@gmail.com')           



export{}