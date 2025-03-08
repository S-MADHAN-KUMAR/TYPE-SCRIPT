class takePhoto {
  constructor(
    public cameraMode: string,
     public filter: string
    ) {}

   abstract getSepia():void
   
   getReelTime(): number{
    // some complex calculation
    return 8
   }
}


class instagram extends takePhoto {
    constructor(
        public cameraMode:string,
        public filter : string,
        public burst : number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
      console.log("Sepia");
    }
}

const Ejaz = new takePhoto("test", "test",3);
