"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo('5')            --   wrong
// addTwo(5)               --  correct 
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(5)            --   wrong
// getUpper('5')           --  correct   
function signUpUser1(name, email, isPaid) { }
function signUpUser2(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
// signUpUser(1,2,3)                            --   wrong      
// signUpUser1('Ejaz','ejaz@gmail.com' ,false )           --  correct   
// signUpUser2('Ejaz','ejaz@gmail.com')         --  correct   
// function getValue(val:number):boolean{
//  if(val > 5){
//     return true
//  }
//  return "200 OK "
// }
var getHello = function (s) {
    return "";
};
// =================== map =====================
var heros = ["thor", "spiderman", 'Ironman'];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
