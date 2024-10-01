let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@kaue");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de filmes de comedia?");
  campoAventura = createCheckbox("Gosta de filme sobre crime?");
  campoAventura = createCheckbox("Gosta de filme sobre ação?");
  campoAventura = createCheckbox("Gosta de filme sobre terror?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(6, 10, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Maria, Kaue, Viviane, Milena";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "https://github.com/Isaa22";          
        } else{
         return "Programando com html e css";
        }
      } else {
        if (gostaDeFantasia) {
          return "Tele hackers";
        } else {
          return "Nenhum sistema é 100% seguro";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "@kaue";
    } else {
      return "Conquistar meus sonhos";
    }
  }
}
