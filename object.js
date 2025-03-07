"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Ejaz",
    email: "ejaz@gmail.com",
    isActive: false
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Ejaz', isPaid: false });
function createCourse() {
    return { name: "reactJS", price: 399 };
}
function createUsers(user) {
    return { name: "", email: "", isActive: true };
}
createUsers({ name: "", email: "", isActive: true });
var exUser = {
    id: "123",
    name: "madhan",
    email: "m@gmail.com",
    isActive: false
};
exUser.name = 'ejaz';
// exUser.id = "123"
