var ball;
var database,position

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var reference=database.ref('ball/positions');
    reference.on("value",readdata,showerror);
}
function readdata(data){
    position=data.val();
    ball.x=position.xvalue;
    ball.y=position.yvalue;
    console.log(position)
}
function showerror(){
    console.log(" NOT WORKING !")
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }
    drawSprites();
}

function changePosition(x,y){
    
    var db=database.ref('ball/positions');
    db.set({
        'xvalue':position.xvalue+x,
        'yvalue':position.yvalue+y
    });






  //  ball.x = ball.x + x;
  //  ball.y = ball.y + y;
}
