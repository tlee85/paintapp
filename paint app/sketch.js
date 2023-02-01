
let colors=['red','orange', 'yellow','green', 'cyan','blue', 'magenta','brown','white', 'black'];
let color=0;
let size=28;
let x, y;
let drawing=false;
function setup() {
  createCanvas(800,800);
  strokeWeight(10);
  background(255);
}
function draw() {
  noStroke();
  for(let i=0;i<colors.length;i++){
    fill(colors[i]);
    rect(0,i*size,size,size);
  }
  stroke(colors[color]);
}
function mousePressed(){
  if(mouseX>=0 && mouseX<size && mouseY>=0 && mouseY<(colors.length*size)){
    color=floor(mouseY/size);
    stroke(colors[color]);
    drawing=false;  
  }else{
    x=mouseX;
    y=mouseY;
    drawing=true;
  }
}
function mouseDragged(){
  if(drawing){
    line(x,y, mouseX, mouseY);
    x=mouseX;
    y=mouseY;
  }
}