let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
{
  name: "town square",
  "button text": ["Ir para a loja", "Ir para a caverna","Lutar contra o Dragão"],
  "button functions": [goStore,goCave,fightDragon],
  text: "Você está na praça da cidade. Você vê uma placa que diz \"Loja\"."
},
{
  name: "store",
  "button text": ["Comprar 10 vida (10 ouro)", "Comprar arma (30 ouro)", "Ir para a praça da cidade"],
  "button functions": [buyHealth, buyWeapon, goTown],
  text: "Você entrou na loja."
}
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
  
}

function goTown() {
  button1.innerText = "Ir para loja";
  button2.innerText = "Ir para caverna";
  button3.innerText = "Lutar contra o Dragão";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "Você está na praça da cidade. Você vê uma placa que diz \"Loja\".";
}

function goStore() {
  button1.innerText = "Comprar 10 vida (10 ouro)";
  button2.innerText = "Comprar arma (30 ouro)";
  button3.innerText = "Ir para a praça da cidade";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "Você entrou na loja."
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {

}

function buyWeapon() {

}
