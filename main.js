let y2 = 345;
let y1 = 345;
let ex = 500;
let ey = 350;
let xspeed = 6;
let yspeed = 6;
let y11= y1 + 100;
let y21= y2 + 100;
let player1Score= 0;
let player2Score= 0;
let p1= player1Score.toString()
let p2= player2Score.toString()

function setup(){
    createCanvas(1000,700);
    background(50);
    rect(50,50,50,50);
      
    
    
}

function create_middle_lines() {
    const array = [140, 280, 420, 560, 700];
    for (i = 0; i < 6; i++) {
        rect(500, array[i], 50, 50);
    } 
    fill("white"); 
}


function create_player_1() {
    
    fill("white");
    rect(30, y1, 25, 100); 
       
   
}

function create_player_2() {
    
    fill("white");
    rect(950,y2,25,100);
    
    
}

function draw() {
    fill(0);
    textSize(50);
    text("HEY",520,20);
    text("SCORE",480,20);            
    rect(500, 350, 50, 50);
    


    background(70);
    create_player_1();
    create_player_2();
    create_middle_lines();
    if (keyIsDown(UP_ARROW) && y2 >= 0) {
        y21 -=8;
        y2 -=8;
      }
    
      if (keyIsDown(DOWN_ARROW) && y2 <= 600) {
        y21 +=8;
        y2 +=8;
      }
      if (keyIsDown(87) && y1 >= 0) {
        y1 -= 8;
        y11 -= 8;
      }
    
      if (keyIsDown(83) && y1 <= 600) {         
        y1 += 8;
        y11 += 8;
      }
    
      
    ellipse(ex,ey,28);
    fill("white");
    ex=ex+xspeed;
    
    //console.log(ex, ey, y2, y21)
    if (ex<83 && ey > y1 && ey < y11 ){
        console.log("This code ran.");
        xspeed= -xspeed;
    }
    if (ex>922 && ey > y2 && ey < y21){
        console.log("This code ran.");

        xspeed= -xspeed;
    }
    ey=ey+yspeed;
    if(ey>height || ey<0){
        yspeed= -yspeed;
    }
    if(ex < 0 || ex > 1000){
        ex=500;
        ey=350;
        player2Score=player2Score+1;                
       

                        

    }
      
}

