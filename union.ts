 let score : number | string = 33

 score = 44

 score = "55"

 type User = {
    name : string,
    id:number
 }

 type Admin = {
    username : string,
    id:number
 }

 let ejaz : User | Admin = {name :"madhan",id:334}

 ejaz = {name:"kumar",id:443}

 function getDbId(id:number|string){
    console.log(`DB id is : ${id}`);
    
 }
 
 getDbId(3)
 getDbId("3")

 function getDBID(id:number|string){
    if(typeof id === 'string'){
        id.toLowerCase()
    }
 }


 // array 

 const data : (number | string | boolean )[] = [1,true,'3']