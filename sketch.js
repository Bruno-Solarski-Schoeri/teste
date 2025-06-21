
// === Variáveis Normais
let tela = "capa", capa, botãojogar, continuar, botaoX = 440, botaoY = 302, botaoLargura, botaoAltura, tempoCutscene = 0, imagensCutscene = {}, nome;
    
// === Variáveis Gameplay
let jogador, carrobatido, teste, cameraX = 0, cameraY = 0, larguraLogica = 240, alturaLogica = 120, escala = 640 / larguraLogica, larguraTela = larguraLogica * escala, alturaTela = alturaLogica * escala, spriteplayer, agua1, agua2, spriteAtualAgua, tempoTroca = 0, intervaloTroca = 150, imglatinha, latinhasColetadas = 0, somlatinha, olhandoParaEsquerda = false,
trilhasonora, telaParabens, jogoFinalizado = false, somvitoria;

// === Variáveis pós gameplay
let somlatinhaab;

// === Cutscenes === //
let cutsceneOrder = [
  "cutscene1", "cutscene2", "cutscene3", "cutscene4", "cutscene5",
  "cutscene6", "cutscene7", "cutscene8", "tutorial", "jogo",
  "telaParabens", "cutscene9", "cutscene10", "cutscene11", "cutscene12",
  "cutscene13", "cutscene14", "cutscene15", "cutscene16", "cutscene17",
  "cutscene18", "cutscene19", "cutscene20", "cutscene21", "cutscene22",
  "cutscene23", "cutscene24", "cutscene25", "cutscene26", "cutscene27",
  "cutscene28", "cutscene29", "cutscene30"
];
let telaIndex = 0; // começa na "capa"

// === Variáveis do Personagem / Sprites
let imgParado, imgPulando, imgAndando = [], frameAndando = 0, tempoUltimoFrame = 0, intervaloFrame = 150;

// === Latinhas do Cenário
let latinhas = [
  { x: 464, y: 64, coletada: false },
  { x: 512, y: 160, coletada: false },
  { x: 132, y: 256, coletada: false }
];

// === Blocos de Colisões
let blocos = [
  {x: 96, y:32, largura: 16, altura: 48},
  {x: 0, y: 80, largura: 128, altura: 16},
  {x: 128, y: 96, largura: 16, altura: 16},
  {x: 144, y: 112, largura: 16, altura: 16},
  {x: 160, y: 128, largura: 16, altura: 16},
  {x: 176, y: 144, largura: 16, altura: 16},
  {x: 192, y: 160, largura: 16, altura: 64},
  {x: 112, y: 208, largura: 80, altura: 16},
  {x: 112, y: 224, largura: 16, altura: 64},
  {x: 128, y: 272, largura: 96, altura: 16},
  {x: 224, y: 256, largura: 16, altura: 16},
  {x: 176, y: 80, largura: 84, altura: 16},
  {x: 284, y: 80, largura: 88, altura: 16},
  {x: 396, y: 80, largura: 88, altura: 16},
  {x: 320, y: 64, largura: 32, altura: 16},
  {x: 236, y: 160, largura: 40, altura: 16},
  {x: 300, y: 176, largura: 40, altura: 16},
  {x: 364, y: 192, largura: 36, altura: 16},
  {x: 240, y: 256, largura: 64, altura: 16},
  {x: 304, y: 240, largura: 112, altura: 16},
  {x: 416, y: 224, largura: 16, altura: 16},
  {x: 432, y: 208, largura: 64, altura: 16},
  {x: 496, y: 176, largura: 32, altura: 32},
  {x: 512, y: 32, largura: 16, altura: 112},
  {x: 528, y: 144, largura: 16, altura: 32},
];

// === Loads

function preload() {
  
  // === Loads Normais
  botãojogar = loadImage('botões/jogar.png');
  capa = loadImage('cutscenes/12.png');
  nome = loadImage('botões/nome.png');
  
  // === Loads de Gameplay (cenário)
  teste = loadImage('Alonso/56.png');
  agua1 = loadImage('Alonso/11.png');
  agua2 = loadImage('Alonso/14.png');
  carrobatido = loadImage('Alonso/18.png');
  imglatinha = loadImage('Alonso/2.png');
  
  // === Loads do Personagem 
  imgParado = loadImage('FramesPl/1.png');
  imgPulando = loadImage('FramesPl/2.png');
  imgAndando[0] = loadImage('FramesPl/3.png');
  imgAndando[1] = loadImage('FramesPl/4.png');
  
  // === Sons
  somlatinhaab = loadSound('Sons/latinha.mp3'); 
  somvitoria = loadSound('Sons/vitoria.mp3'); 
  trilhasonora = loadSound('Sons/TrilhaSonora.mp3');
  somlatinha = loadSound('Sons/somlatinha.wav');
   
  // === Cutscenes === //
  continuar = loadImage('botões/continuar.png');
  cutscene1 = loadImage('cutscenes/1.png'); 
  cutscene2 = loadImage('cutscenes/2.png'); 
  cutscene3 = loadImage('cutscenes/3.png');
  cutscene4 = loadImage('cutscenes/4.png');
  cutscene5 = loadImage('cutscenes/5.png');
  cutscene6 = loadImage('cutscenes/6.png');
  cutscene7 = loadImage('cutscenes/7.png');
  cutscene8 = loadImage('cutscenes/8.png');
  tutorial = loadImage('cutscenes/tutorial.png');
  telaParabens = loadImage('Alonso/parabens.png');
  cutscene9 = loadImage('cutscenesPgame/9.png'); 
  cutscene10 = loadImage('cutscenesPgame/10.png'); 
  cutscene11 = loadImage('cutscenesPgame/11.png'); 
  cutscene12 = loadImage('cutscenesPgame/12.png'); 
  cutscene13 = loadImage('cutscenesPgame/13.png'); 
  cutscene14 = loadImage('cutscenesPgame/14.png'); 
  cutscene15 = loadImage('cutscenesPgame/15.png'); 
  cutscene16 = loadImage('cutscenesPgame/16.png'); 
  cutscene17 = loadImage('cutscenesPgame/17.png'); 
  cutscene18 = loadImage('cutscenesPgame/18.png'); 
  cutscene19 = loadImage('cutscenesPgame/19.png'); 
  cutscene20 = loadImage('cutscenesPgame/20.png'); 
  cutscene21 = loadImage('cutscenesPgame/21.png');
  cutscene22 = loadImage('cutscenesPgame/22.png');
  cutscene23 = loadImage('cutscenesPgame/23.png');
  cutscene24 = loadImage('cutscenesPgame/24.png');
  cutscene25 = loadImage('cutscenesPgame/25.png');
  cutscene26 = loadImage('cutscenesPgame/26.png');
  cutscene27 = loadImage('cutscenesPgame/27.png');
  cutscene28 = loadImage('cutscenesPgame/28.png');
  cutscene29 = loadImage('cutscenesPgame/29.png');
  cutscene30 = loadImage('cutscenesPgame/30.png');
  
} // === Fim dos Loads

// === Setup ==== //

// === Tela
function setup(){
  let canvas = createCanvas(larguraTela, alturaTela); // cria a tela
  canvas.id('meuCanvas');
  noSmooth(); // sem filtros

  // === Volume dos sons
  trilhasonora.setVolume(0.6);
  somlatinha.setVolume(0.8);
  somlatinhaab.setVolume(0.5);

  // === Largura do botão continuar
  botaoLargura = continuar.width * 1.5;
  botaoAltura = continuar.height * 1.5;
  
  // === Água maneira (animada)
  spriteAtualAgua = agua1;
  
  // === Jogador, gravidade, hitbox, velocidade, etc
  jogador = {
    x: 112,
    y: 0,
    largura: 16,
    altura: 16,
    spriteLargura: 40,
    spriteAltura: 38,
    velocidadeX: 1.55,
    velocidadeY: 0,
    gravidade: 0.7,
    forcaPulo: -7.5,
    noChao: false
  };
  
  imagensCutscene = {
  "cutscene1": cutscene1,
  "cutscene2": cutscene2,
  "cutscene3": cutscene3,
  "cutscene4": cutscene4,
  "cutscene5": cutscene5,
  "cutscene6": cutscene6,
  "cutscene7": cutscene7,
  "cutscene8": cutscene8,
  "tutorial": tutorial,
  "telaParabens": telaParabens,
  "cutscene9": cutscene9,
  "cutscene10": cutscene10,
  "cutscene11": cutscene11,
  "cutscene12": cutscene12,
  "cutscene13": cutscene13,
  "cutscene14": cutscene14,
  "cutscene15": cutscene15,
  "cutscene16": cutscene16,
  "cutscene17": cutscene17,
  "cutscene18": cutscene18,
  "cutscene19": cutscene19,
  "cutscene20": cutscene20,
  "cutscene21": cutscene21,
  "cutscene22": cutscene22,
  "cutscene23": cutscene23,
  "cutscene24": cutscene24,
  "cutscene25": cutscene25,
  "cutscene26": cutscene26,
  "cutscene27": cutscene27,
  "cutscene28": cutscene28,
  "cutscene29": cutscene29,
  "cutscene30": cutscene30
 };  
}

// === Desenhar na Tela === //

function draw() {
  
  // === Desenhar Normal === //
  
  // === Telas de Cutscenes 
  if (tela === "capa") {
  image(capa, 0, 0, width, height);
  image(botãojogar, width / 2 - 50, 50, 100, 100);
  image(nome, 5, 250); 
  } 
  else if (imagensCutscene[tela]) {
  image(imagensCutscene[tela], 0, 0, width, height);
  
  // === Só desenha botão se não for a última
  if (tela !== "cutscene30") {
    desenharBotaoContinuar(1500);
  }
}
  
  // === Desenhar Gameplay === //
   
  if (tela === "jogo") {
  background(0, 183, 239);

  // === Água maneira  
  if (millis() - tempoTroca > intervaloTroca) {
    tempoTroca = millis();
    spriteAtualAgua = (spriteAtualAgua === agua1) ? agua2 : agua1;
  }
    // === Câmera
  cameraX = jogador.x + jogador.largura / 2 - larguraLogica / 2;
  cameraY = jogador.y + jogador.altura / 2 - alturaLogica / 2;

  push();
  scale(escala);
  translate(-cameraX, -cameraY);

    // === Cenário
  image(teste, 0, 0);
  image(spriteAtualAgua, 32, 0);
  image(carrobatido, -55, 6);

    // === Latinhas
  for (let latinha of latinhas) {
    if (!latinha.coletada) {
      image(imglatinha, latinha.x, latinha.y, 11, 18);
    }
  }

    // === Blocos
  for (let bloco of blocos) {
   noFill();
   noStroke();
    rect(bloco.x, bloco.y, bloco.largura, bloco.altura);
  }

    // === Movimentação
  let movimentoX = 0;
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    movimentoX = -jogador.velocidadeX;
    olhandoParaEsquerda = true;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    movimentoX = jogador.velocidadeX;
    olhandoParaEsquerda = false;
  }

  let imgAtual;
  if (!jogador.noChao) {
    imgAtual = imgPulando;
  } else if (movimentoX !== 0) {
    if (millis() - tempoUltimoFrame > intervaloFrame) {
      tempoUltimoFrame = millis();
      frameAndando = (frameAndando + 1) % imgAndando.length;
    }
    imgAtual = imgAndando[frameAndando];
  } else {
    imgAtual = imgParado;
  }

  push();
  translate(jogador.x + jogador.largura / 2, jogador.y + jogador.altura / 2);
  if (olhandoParaEsquerda) scale(-1, 1);
  imageMode(CENTER);
  image(imgAtual, 0, 0, jogador.spriteLargura, jogador.spriteAltura);
  pop();

  pop(); // fim da câmera

  jogador.x += movimentoX;
  for (let bloco of blocos) {
    if (colide(jogador, bloco)) {
      if (movimentoX > 0) jogador.x = bloco.x - jogador.largura;
      else if (movimentoX < 0) jogador.x = bloco.x + bloco.largura;
    }
  }

  jogador.velocidadeY += jogador.gravidade;
  jogador.y += jogador.velocidadeY;
  jogador.noChao = false;

  for (let bloco of blocos) {
    if (colide(jogador, bloco)) {
      if (jogador.velocidadeY > 0) {
        jogador.y = bloco.y - jogador.altura;
        jogador.velocidadeY = 0;
        jogador.noChao = true;
      } else if (jogador.velocidadeY < 0) {
        jogador.y = bloco.y + bloco.altura;
        jogador.velocidadeY = 0;
      }
    }
  }

  if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && jogador.noChao) {
    jogador.velocidadeY = jogador.forcaPulo;
  }

  for (let latinha of latinhas) {
    if (!latinha.coletada && colide(jogador, { x: latinha.x, y: latinha.y, largura: 11, altura: 18 })) {
      latinha.coletada = true;
      latinhasColetadas++;
      somlatinha.play();
    }
  }
  
    // === Coletou todasas latinhas / Acaba a gameplay e muda a para a telaParabens === //
    if (latinhasColetadas === latinhas.length && !jogoFinalizado) {
  jogoFinalizado = true;
  trilhasonora.stop();
  somvitoria.play();
  tela = "telaParabens";
  tempoCutscene = millis(); 
} 
 
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Amostras: " + latinhasColetadas, 10, 10);
    
    // === Verifica se o jogo terminou === //
  if (latinhasColetadas === latinhas.length) {
    jogoFinalizado = true;
  }
 } // === Fim do Draw da Gameplay   
} // === Fim do Draw


// === Funções === //

// === Espera para o botão continuar aparecer
function desenharBotaoContinuar(espera) {
  if (millis() - tempoCutscene >= espera) {
    image(continuar, botaoX, botaoY, botaoLargura, botaoAltura);
  }
 }

// === Função do Mouse Pressionado para mudar de Cutscenes === //
function mousePressed() {
  if (tela === "capa") {
    let x = width / 2 - 50;
    let y = 50;
    if (mouseX >= x && mouseX <= x + 100 && mouseY >= y && mouseY <= y + 100) {
      tela = cutsceneOrder[0]; // primeira cutscene
      telaIndex = 0;
      tempoCutscene = millis();
    }
    return;
  }

  // Só avança se clicou no botão
  if (!botao()) return;

  // Ações específicas
  if (tela === "cutscene15") somlatinhaab.play();
  if (tela === "cutscene24") somvitoria.play();
  if (tela === "tutorial") trilhasonora.loop();

  // Avança para próxima tela, se existir
  let proximaIndex = cutsceneOrder.indexOf(tela) + 1;
  if (proximaIndex < cutsceneOrder.length) {
    tela = cutsceneOrder[proximaIndex];
    tempoCutscene = millis();
  }
} // === Fim da função do Botão

// === Função do Botão
function botao() {
  return millis() - tempoCutscene >= 1500 &&
         mouseX >= botaoX &&
         mouseX <= botaoX + botaoLargura &&
         mouseY >= botaoY &&
         mouseY <= botaoY + botaoAltura;
}

// === Colisão
function colide(a, b) {
  return a.x < b.x + b.largura &&
         a.x + a.largura > b.x &&
         a.y < b.y + b.altura &&
         a.y + a.altura > b.y;
}