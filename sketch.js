//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//variavel da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimento = 10;
let altura = 90;

//varialvel do oponete
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false

//placa do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons 
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraraquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificarColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente)
  mostraraquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha,yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
  
}

function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha *=-1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
  }
}

function mostraraquete(x,y){
  rect(x, y, comprimento, altura);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}


function verificarColisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimento && yBolinha - raio < yRaquete + altura && yBolinha + raio > yRaquete){
    velocidadeXbolinha *= -1;
    raquetada.play()
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,comprimento,altura, xBolinha, yBolinha,raio);
  if(colidiu){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha-yRaqueteOponente-comprimento/2-30;
  yRaqueteOponente += velocidadeYOponente;
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente,470,26);
}
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function verificarColisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimento && yBolinha - raio < yRaquete + altura && yBolinha + raio > yRaquete){
    velocidadeXbolinha *= -1;
    raquetada.play()
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,comprimento,altura, xBolinha, yBolinha,raio);
  if(colidiu){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

//function movimentaRaqueteOponente(){velocidadeYOponente = yBolinha-yRaqueteOponente-comprimento/2-30;yRaqueteOponente += velocidadeYOponente;}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}
