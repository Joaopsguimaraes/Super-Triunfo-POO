import { Cartas } from "./Cartas.js";
import { Status } from "./Status.js";

const cartaBulbasaur = new Cartas("Bulbasaur");
cartaBulbasaur.defineStatus(new Status(3, 3, 4, 4, 3));
const cartaCharmander = new Cartas("Charmander");
cartaCharmander.defineStatus(new Status(4, 3, 4, 3, 4));
const cartaVulpix = new Cartas("Vulpix");
cartaVulpix.defineStatus(new Status(3, 3, 3, 4, 4));
const cartaSquirtle = new Cartas("Squirtle");
cartaSquirtle.defineStatus(new Status(3, 4, 3, 4, 3));
const cartaButterfree = new Cartas("Butterfree");
cartaButterfree.defineStatus(new Status(3, 3, 6, 5, 5));

var cartas = [];
cartas.push(cartaBulbasaur);
cartas.push(cartaCharmander);
cartas.push(cartaVulpix);
cartas.push(cartaSquirtle);
cartas.push(cartaButterfree);

var cartaMaquina;
var cartaJogador;

function sortearCartas() {
  let numeroCartaMaquina = parseInt(Math.random() * cartas.length);

  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  let numeroCartaJogador = parseInt(Math.random() * cartas.length);

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  document.getElementById("btnSortear").disable = "true";
  document.getElementById("btnJogar").disable = "false";

  exibirOpcoes() 
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var status in cartaJogador.classe) {
    opcoesTexto +=
    "<input type='radio' name='status' value='" +
    status +
    "'>" +
    status;
  }
  opcoes.innerHTML = opcoesTexto;
}