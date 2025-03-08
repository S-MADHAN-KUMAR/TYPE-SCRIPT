function addTwo(num : number){
    return num+2
}

// addTwo('5')            --   wrong
// addTwo(5)               --  correct 



function getUpper(val : string): string{
    return val.toUpperCase()
}

// getUpper(5)            --   wrong
// getUpper('5')           --  correct   



function signUpUser1(name :string, email :string , isPaid : boolean){}
function signUpUser2(name :string, email :string , isPaid : boolean = false){}

// signUpUser(1,2,3)                            --   wrong      
// signUpUser1('Ejaz','ejaz@gmail.com' ,false )           --  correct   
// signUpUser2('Ejaz','ejaz@gmail.com')         --  correct   



// function getValue(val:number):boolean{
//  if(val > 5){
//     return true
//  }
//  return "200 OK "
// }


const getHello =(s:string):string=>{
  return ""
}

// =================== map =====================

const heros = ["thor","spiderman",'Ironman']
// const heros = [1,2,3]

heros.map((hero:string):string=>{
    return `hero is ${hero}`
})


function consoleError(errmsg : string): void{
    console.log(errmsg);
}
function handleError(errmsg : string):never{
  throw new Error(errmsg);
}

export{}