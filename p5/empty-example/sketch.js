let rectObjs = [];


function setUp(){
  createCanvas(400, 400);
}

function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);


  for (let i=0; i < rectObjs.length; i++){
    fill(rectObjs[i].fillColor);
    rect(rectObjs[i].xpos, rectObjs[i].ypos, 50, 25);
    rectObjs[i].ypos +=1;
  }
}

function mousePressed(){
  rectObjs.push({xpos: mouseX, ypos: mouseY, fillColor: random(255)})
  
  console.log(rectObjs);
}




// let kitties = [
//  {age:14, weight: 12.4},
//  {age:3, weight: 10.1}, 
//  {age:14, weight: 8.5},
// ]

// let weightSum = 0;

// function setup(){
//   createCanvas(400,400);

//   for (let i =0; i < kitties.length; i++){
//     weightSum += kitties[i].weight;
//   }

//   console.log(weightSum)
// }












// let rectX = [];
// let rectY = [];

// function setup(){
//   createCanvas(400,400);
// }

// function draw (){
//   background(50);
//   noStroke();
//   rectMode(CENTER);
//   fill(255);


//   for (let i = 0; i < rectY.length; i++){
//     rect(200, rectX[i], 50, 25);
//     rectY[i] +=1;
  
//   }
// }

// function mousePressed(){
//   rectX.push(mouseX);
//   rectY.push(mouseY);
// } 









// let rectY = [0,15,30];

// function setup() {
//   // put setup code here
//   createCanvas(400,400);

// }

// function draw() {
//   // put drawing code here
//   background(50);
//   rectMode(CENTER);
//   noStroke();
//   fill(255);

//   for(let i = 0; i < rectY.length; i++){
//     rect((i+1)*100, rectY[i], 50, 25);
//     rectY[i] +=1;
//   }

//   console.log(rectY);

// }


// let ypos=200;
// let xpos=80;
// let xstep=30;
// //incrementing 60 pixels in the step of x

// let hstep = 15;
// let fillstep= 20;
// let hue= 50;

//orig=origin
//dest= destiny

// let origx= 200;
// let origy= 100;
// let destx= 200;
// let desty= 300;


// let xpos= 80;
// let xstep= 30;
// let ypos= 140;
// let ystep= 30;








  // ellipse(xpos, ypos, 40, 40);
  // ellipse(xpos + xstep, ypos, 40, 40);
  // ellipse(xpos + xstep *2, ypos, 40, 40);
  // ellipse(xpos + xstep*3, ypos, 40, 40);
  // ellipse(xpos+ xstep*4, ypos, 40, 40);

  // for (let i = 25; i<400; i+=25){
  //   // fill(hue+(fillstep*i), 100, 100);
  //   // ellipse(xpos*i + (xstep*i), ypos, 20, 20+(hstep*i));
  //   // console.log(i)
  //   stroke(50);
  //   line(i, 200, origx, origy);
  //   stroke(240);
  //   line(i,200, destx, desty);

    // for (let i= start; i < end; i += step){
        //start= start counting from
        //end= where you want the loop to stop
        //step= how much you want to increment the number btwn each step
    // }

    // console.log(i);
          //incrementing by one (0-11)





