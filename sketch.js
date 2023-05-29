function setup() {
    createCanvas(600, 700);
    background(200);
  }
  function draw() {
    fill(242, 180, 7);
    rect(mouseX, mouseY, 20, 20);
  
    //rectangulos
    strokeWeight(10);
    line(600, 0, 350, 250);
    rect(320, 490, 40, 40);
  
    if (mouseIsPressed) fill(242, 7, 7);
    rect(155, 372, 110, 110);
    endShape(CLOSE);
  
    fill(242, 180, 7); //AMARILLO
    strokeWeight(1);
    rect(440, 450, 60, 40);
  
    fill(71, 193, 45); //VERDE
    rect(150, 187, 40, 73);
    strokeWeight(8);
    rect(200, 300, 200, 220);
  
    fill(242, 7, 7); //ROJO
    strokeWeight(1);
    line(500, 0, 300, 150);
    fill(71, 193, 7); //AMARILLO
    rect(100, 80, 90, 80);
  
    fill(242, 7, 7); //ROJO
    rect(400, 190, 90, 90);
    strokeWeight(2);
    rect(90, 70, 999, 70);
  
    if (mouseIsPressed) fill(7, 32, 242); //AZUL
    rect(1, 300, 50, 103);
    rect(55, 70, 90, 50);
    line(500, 0, 350, 200);
    rect(44, 60, 77, 80);
  
    if (mouseIsPressed) fill(242, 180, 7); //AMARILLO
    rect(8, 200, 10, 18);
    fill(7, 32, 242); //AZUL
    rect(9, 120, 200, 80);
  
    line(450, 300, 400, 225); // LINEAS SUPERPUESTAS
    if (mouseIsPressed) line(510, 210, 360, 460);
    if (mouseIsPressed) line(360, 210, 250, 100);
  }
  