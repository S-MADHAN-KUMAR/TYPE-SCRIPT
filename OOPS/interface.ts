interface takePhoto {
    cameraMode : string
    filter : string
    burst : number
}

interface story {
    createStory(): void 
}

class Instagram implements takePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
        public  burst : number
    ){}
}

class Youtube implements takePhoto,story{
    constructor(
        public cameraMode : string,
        public filter : string,
        public  burst : number,
        public short : string
    ){}

    createStory(): void {
        console.log('Story was created');
    }
}