// ***Boolean*** //
// let isActive = true;
// console.log(isActive) 
// let isLoggin : boolean;
// isLoggin = false;
// console.log(isLoggin);

//Number
let value = 10;
console.log(value);
let val : number;
val = 25;
console.log(val);

//String
let myName = 'Prabhu'
console.log(myName);

let person : string;
person = 'Manikandan'
console.log(person);

//Void
function test(){
  console.log("Test Mode");
  
}
test()

let check = ()=>{
  console.log("Its Worked");
  
}
check()

//undefined
let myName : string;
console.log(myName);

//null
// let user : string | null = null;
// console.log(user);

// user = 'Prathi'
// console.log(user);

//interface

// interface user{
//   name : string;
//   age?:number;
// }

// interface user{
//   city: string
// }

// const myUser : user = {
//   name : 'Prabhu',
//   age : 40,
//   city : 'chennai'
// }

// console.log(myUser);
// console.log(myUser.name);
// myUser.name = 'Mani'
// console.log(myUser);

// interface person {
//   name : string
//   age : number
//   city : string
//   lang?: string
// }

// const Person : person = {
//   name : 'Pranav',
//   age : 7,
//   city : 'chennai'
// }

// console.log(Person);

//Enum

// enum orderStatus {
//   pending = "PENDING",
//   shipped = "SHIPPED",
//   delivered = "DELIVERED"
// }

// function updateOrderStatus(orderID:number, status:orderStatus):string{
//   return `This Order ${orderID} is now ${status}`
// }

// console.log(updateOrderStatus(100,orderStatus.pending));

//Array
// let arr : number[] = []
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// console.log(arr);

// let array = ['prabhu','mani','shanthi']
// console.log(array);
// array[0] = 'Pranav'
// console.log(array);
// array.shift()
// console.log(array);

// let person : (string | number | boolean)[];

// person = [10,true,'Prabhu']
// console.log(person);

// const myUser = ['Shanthi',31,'Chennai',true]

//Tuple
// const values : [string,number] = ['Prabhu',10]
// console.log(values);
// values[0] = 'Shanthi'
// values[1] = 30
// console.log(values);
// values[0] = 10  // Error
// values[1] = 'Pranav'  //Error
// values.push('Mani') // Accepted even tuple
// values.push(30) // Accepted even tuple
// console.log(values);


//Object
// const person : {
//   name : string,
//   age : number,
//   city : string
//   [key:string] : any
// } = {
//   name : 'Prabhu',
//   age : 40,
//   city:'Chennai'
// }

// console.log(person);
// person.lang = 'Tamil'
// person.pincode = 626142
// console.log(person);

// //class
// class Coder{
//   public name : string
//   private age : number
//   protected language : string
//   constructor(name:string, age:number, language:string){
//     this.name = name
//     this.age = age
//     this.language = language
//   }
//   getAge(){
//   console.log(`My Age is ${this.age}`);
  
//   }
//   getLang(){
//     console.log(`I write ${this.language}`);
    
//   }
// }

// const person1 = new Coder('Prabhu',36, 'TypeScript')
// console.log(person1);
// person1.name = 'Prathiksha'
// console.log(person1);
// //console.log(person1.age)
// person1.getLang()

// class WebDev extends Coder{
//   computer : string
//   constructor(name:string,age:number,language:string,computer:string){
//     super(name,age,language)
//     this.computer = computer
//   }
//   getLang(){
//      console.log(`I learn ${this.language}`)
//   }
  
// }

// const person2 = new WebDev('Pranav',7,'TypeScript','Mac')
// console.log(person2);
// person2.getLang()


// class User{
//   name : string
//    _age : number
//   constructor(name:string,age:number){
//     this.name = name
//     this._age = age
//   }
//   get age(){
//     return this._age
//   }
//   set age(num:number){
//     if(num>18){
//       this._age = num
//     }else{
//       console.log("Age is must be greater than 18");
      
//     }
//   }

// }

// const myUser = new User('Prabhu',36)
// console.log(myUser);
// console.log(myUser.age)
// myUser.age =17

//Unknown
// let value:unknown
// value = 'Prabhu'
// if(typeof value === 'string'){
//   value = value.toUpperCase()
// }
// console.log(value as string)
// let value1:string = value as string
// console.log(value1);

// function add(a:unknown){
//   if(typeof a === 'number'){
//     return a+2
//   }
//   else{
//     return `The Value is ${a}`
//   }
// }
// console.log(add(10))
// console.log(add('Hello'))



// //any
// let myName;
// myName = 'Mani'
// console.log(myName.toUpperCase())
// myName =10

//Never

// function throwError():never{
//   throw new Error('This is an Error')
// }

// try{
//   console.log(throwError());
  
// }catch(e){
//   console.log(e.message);
  
// }

//as
// let myName:unknown;
// myName = 'Shanthi'
// let finalName:string = myName as string
// console.log(finalName);

//any
// let value : any;
// value = 10
// console.log(value);
// value = 'Vijay'
// console.log(value);
// value = true
// console.log(value);

//satisfies
// type person = {
//   name : string;
//   age : number;
// }

// const user = {
//   name : 'Prabhu',
//   age : 36,
//   isActive : true
// } satisfies person

// console.log(user)

//union
// let value:string|number;
// value = 10
// console.log(value);
// value= 'Prabhu'
// console.log(value);

//Intersection
// type person1 = {
//   name : string
// }

// type person2 = person1 & {
//   age : number
// }

// type person3 = person1 & person2 & {
//   city : string
// }

// const Person : person3 = {
//   name : 'Prabhu',
//   age : 36,
//   city : 'Chennai'
// }
// console.log(Person);

//Aliases
// type value = string | number

// let result : value;
// result = 10
// console.log(result);
// result = "Sneka"
// console.log(result);

//keyof
// type user = {
//   name : string
//   age : number
//   isActive : true
// }

// type userKeys = keyof user
// const user1 = "name"
// console.log(user1);

//instanceof
// class Bird{
//   fly(){
//     console.log("flying");
    
//   }
// }

// const bird = new Bird()
// console.log(bird instanceof Bird);

//typeof
// let value : string | number = "Hello"

// if(typeof value === 'string'){
//   console.log('Value is String');
// }else{
//   console.log("Value is Number");
// }

//Equality
// let x = 10
// let y = 20

// if(x===y){
// console.log(true);
// }else{
//   console.log(false);
// }

//Truthiness
// let value = 'prabhu'

// if(value){
//   console.log('Value Accepted');
// }else{
//   console.log("Value Not Accepted"); 
// }

//function overload
// function user(name:string):string
// function user(name:string, age:number):string

// function user(name:string, age?:number):string{
//   if(age){
//     return `My Name is ${name} & age is ${age}`
//   }else{
//     return `My Name is ${name}`
//   }
// }

// console.log(user('Prabhu'))
// console.log(user('Prabhu',40))

//Promise
// function addTwoNumbers(num1:number,num2:number):Promise<number>{
//   return new Promise((resolve,reject)=>{
//     if(typeof num1==='number' && typeof num2==='number'){
//       resolve(num1+num2)
//     }else{
//       reject("Both are must be Numbers")
//     }
//   })
// }

// addTwoNumbers(5,10)
// .then((num)=>{
//   console.log(`Sum is ${num}`);
// }).catch((error)=>{
//   console.log(error);
  
// })

//Promise converted to async
// async function addTwoNumbers(num1:number,num2:number):Promise<number>{
//   return new Promise((resolve,reject)=>{
//     if(typeof num1==='number' && typeof num2==='number'){
//       resolve(num1+num2)
//     }else{
//       console.log("Both are must be Numbers");
//     }
//   })
// }

// async function getAddition(){
//   try{
//     const sum = await addTwoNumbers(5,10)
//     console.log(`Sum is ${sum}`);
//   }catch(err){
//     console.log(err.message);
//   }
// }

// getAddition()

//Generic
// function Identity<T>(arg:T):T{
//   return arg
// }

// console.log(Identity(5));
// console.log(Identity("Hello"))

// class Storage1<T>{
//   _data : T
//   constructor(initialData:T){
//     this._data = initialData
//   }
//   get data():T{
//     return this._data
//   }
//   set data(newData:T){
//     this._data = newData
//   }
// }

// const num = new Storage1<number>(40)
// console.log(num);
// console.log(num.data);
// num.data = 100
// console.log(num.data);

// const num1 = new Storage1<string>('hello')
// console.log(num1);
// console.log(num1.data);
// num1.data = 'Hiiiiiii'
// console.log(num1.data);

//Utility Types
// interface user{
//   name ?:string
//   age ?:number
// }

// let myUser : Partial<user> = {name : 'Prabhu'}

// let myUser1 : Required<user> = {name:'prabhu',age:36}

// let myUser2 : Readonly<user> = {name:'prabhu',age:36}




