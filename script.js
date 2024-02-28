let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["soco"];

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
const weapons = [
  {
    name: "Soco",
    power: 5
  },
  {
    name: "Punhal",
    power: 30 
  },
  {
    name: "Martelo de Garra",
    power: 50
  },
  {
    name: "Espada",
    power: 100
  }
];
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
},
{
  name: "cave",
  "button text": ["Lutar Lesma", "Lutar Fera", "Ir para a praça da cidade"],
  "button functions": [fightSlime, fightBeast, goTown],
  text: "Você entra na caverna. Você vê alguns monstros."
}
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];  
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
  if (gold >= 10){
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    } else {
      text.innerText = "Você não tem ouro suficiente para comprar Vida."
    }
}

function buyWeapon() {
  if (gold >= 30){
    gold -= 30;
    currentWeapon ++;
    goldText.innerText = gold;
  } else {
    text.innerText = "Agora você tem uma nova arma";
  }
}

function fightSlime() {

}

function fightBeast() {

}