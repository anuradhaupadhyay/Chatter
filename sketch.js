var input, readRef, readMessage,write;

function preload(){
    background_Image = loadImage("icon.png")
}


function setup(){
    createCanvas(400,400);
    input = createInput("Type your message here");

    db = firebase.database();
    readRef = db.ref("Chatter");
    readRef.on("value",read,console.log("error; NO INTERNET"));
    readRef.set("Type your message here");
}

function draw(){
    background(background_Image);
    console.log(readMessage);
    writeMessage();


    fill("Red");
    textFont('Georgia');
    textSize(18);
    text(readMessage,200,200,200,200);
}

function read(data){
        readMessage = data.val();
}

function writeMessage(){
    readRef = db.ref("Chatter");
    write = input.value();
    if(keyCode===13){
    readRef.set(write);
    
    }
}