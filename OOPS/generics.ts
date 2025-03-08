const scores : Array<number> = []
const names :Array<string> = []

// Normal way 

function identityOne(value : boolean | number): boolean | number {
    return value
}

//  Any 

function identityTwo(value:any):any{
    return value
}

// Generics 

function identityThree<Type>(value:Type):Type{
    return value
}

identityThree(3)
identityThree("MOHAMED EJAZ")

// Other way to do ...

function identityFour<T>(value:T):T{
    return value
}

interface Bootle {
    brand : string,
    type: number
}

identityFour<Bootle>({brand : 'glass',type : 5})