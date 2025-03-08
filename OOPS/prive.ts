// private , # both same  

class User {
    private readonly city: string = "Jaipur";
    constructor(
        public email: string,
        public name: string
        // private userId  = userId 
    ) {
    }
  }
  
  const Ejaz = new User("h@.com", "ejaz");
//   Ejaz.city = "3";  // we can't access and set because PRIVATE

  