const user ={
    name :"Ejaz",
    email:"ejaz@gmail.com",
    isActive:false
}

function createUser({name :string,isPaid:boolean}){}

createUser({name :'Ejaz',isPaid:false})


function createCourse():{name :string,price:number}{
    return {name:"reactJS",price:399}
}

//============== Type alias ========================

type User ={
    name :string,
    email:string,
    isActive:boolean
}

type MyString = string

function createUsers(user:User){
    return {name:"",email:"",isActive:true}
}

createUsers({name:"",email:"",isActive:true})


export {}

//================== READ ONLY =================================

type user = {
    readonly id : string,
    name : string,
    email : string,
    isActive : boolean,
    credcard ?:number
}

let exUser : user ={
    id:"123",
    name:"madhan",
    email:"m@gmail.com",
    isActive:false
}

exUser.name = 'ejaz'
// exUser.id = "123"