interface db{
    connection :string,
    username : string,
    password:string
}

function anotherFunction<T,U extends db>(valOne:T,valTwo: U): object {
  return {
    valOne,
    valTwo
  }
}

anotherFunction(3,{connection:"madhan",username:'ejaz',password:"123"})

interface Quiz {
    name : string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

// Generic class 

class Sellable<T>{
    public cart : T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
}