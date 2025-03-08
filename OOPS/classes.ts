// create classes in type script

class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

// create object

const Ejaz = new User("h@.com", "ejaz");
Ejaz.city = "3";
