interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
//   startTrail ?: () => string
   startTrail?(): string,
   getCoupon ? (c_name:string) : number
}

const ejaz: User = {dbId:22, email: "e@gmial.com", userId: 2211 };

ejaz.email = "madhan.com"

// ejaz.dbId = 33           --wrong

startTrail:()=>{
    return 'Trail started...'
}

getCoupon:(name : "ejaz")=>{
    return 19
}

// getCoupon:(name : 2)=>{                 -- wrong
//     return 19
// }

