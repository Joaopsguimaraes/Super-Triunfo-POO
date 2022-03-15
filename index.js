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
cartas.push(cartaBulbasaur.classe);
cartas.push(cartaCharmander.classe);
cartas.push(cartaVulpix.classe);
cartas.push(cartaSquirtle.classe);
cartas.push(cartaButterfree.classe);

var cartaMaquina;
var cartaJogador;

function sortearCartas() {
  let numeroCartaMaquina = parseInt(Math.random() * cartas.length);

  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  let numeroCartaJogador = parseInt(Math.random() * cartas.length);

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  //document.getElementById("btnSortear").disable = "true"
  //document.getElementById("btnJogar").disable = "false"
}

function exibirOpcoes() {
    //var opcoes = document.getElementById("opcoes");
  for (var status in cartaJogador) console.log(status);
}

sortearCartas()