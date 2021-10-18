const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let angle = 0
let scrollVal = -canvasHeight * 5

function setup(){
    createCanvas(canvasWidth, canvasHeight, WEBGL)

}

function draw(){
    background([130,30,200])
    fill([90, 60, 60])
    angleMode(DEGREES)
    rotateX(90)
    
    push()
        translate(0, -canvasHeight * 4, -200)
        drawSun(0, -1400, 400)
        drawGround()
    pop()
    
    translate(0, scrollVal, -200)

    for(let i = 0; i < 30; i++){
        drawBuilding(canvasWidth, -canvasHeight + (i) * 600, 400)
        drawBuilding(-canvasWidth, -canvasHeight + (i) * 600, 400)
    }
    scrollVal+=5
    // drawBuilding(canvasWidth, -canvasHeight/2 + 1000, 500)
}

function drawGround(){
    push()
    translate(-canvasWidth * 5, 0 , 0)
    rect(-canvasWidth, -canvasHeight * 2, canvasWidth * 10, canvasHeight * 8)
    pop()
    drawRoad()
}


function drawSun(x,y,z){
    push()
        rotateX(-90)
        //translate(0, -600,-300)
        fill([220, 0, 0])
        stroke([120,120,20])
        strokeWeight(20)
        ellipse(x,y,z)
        fill([220,220, 0])
        noStroke()
        ellipse(x,y,z/1.2)
    pop()
}

function drawBuilding(x,y,z){
    // angle+=1
    const height = z * 2
    push()
        translate(x,y,z)
        rotateX(-90)
        rotateY(-180)
        fill([0,200,0])
        stroke([0,0,120])
        strokeWeight(10)
        // rect(0,0, 1000, 500)
        box(200,height,200)
    pop()
}

function drawRoad(){
    push()
    translate(0, -canvasHeight * 2 + scrollVal,10)
    fill(255)
    noStroke()
    for(let i = 0; i < 1000; i++){
        rect(0, 120 * i, 10,60)
    }
    
    pop()
}