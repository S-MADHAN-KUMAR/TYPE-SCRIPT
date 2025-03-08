class User {
    protected _courseCount = 1;
    readonly city: string = "Jaipur";
  
    constructor(
      public email: string,
      public name: string // private userId  = userId
    ) {}
  
    // Getter ============================================
  
    get getAppleEmail(): string {
      return `apple${this.email}`;
    }
  
    // Getter for PRIVATE ================================
  
    get courseCount(): number {
      return this._courseCount;
    }
  
    // setter ============================================
  
    set courseCount(courseNum) {
      if(courseNum <= 1){
          throw new Error("Course count more than 1")
      }
      this._courseCount = courseNum
    }
  
    private deleteToken(){
      return console.log('Token removed')
    }
  
  }

class SubUser extends User {
    isFamily : boolean =  true
    changeCourseCount(){
        this._courseCount = 4  // It only allow where ever element or function declare with PROTECTED
    }
}