let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["Luva"];

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
    name: "Luva",
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
  "button text": ["Comprar 10 vida (10 ouro)", "Comprar arma (30 ouro)", "Ir para a Cidade"],
  "button functions": [buyHealth, buyWeapon, goTown],
  text: "Você entrou na loja."
},
{
  name: "cave",
  "button text": ["Lutar Lesma", "Lutar Fera", "Ir para a praça da cidade"],
  "button functions": [fightSlime, fightBeast, goTown],
  text: "Você entra na caverna. Você vê alguns monstros."
},
{
  name: "fight",
  "button text": ["Atacar", "Desviar", "Correr"],
  "button functions": [attack, dodge, goTown],
  text: "Você está lutando contra um monstro."
},
{
  name: "Monstro morto!",
  "button text": ["Ir para a cidade", "Ir para a cidade", "Ir para a cidade"],
  "button functions": [goTown, goTown, goTown],
  text: 'O monstro grita "Arg!" à medida que morre. Você ganha pontos de experiência e encontra ouro.'
},
{
  name: "Perdeu!",
  "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
  "button functions": [restart, restart, restart],
  text: "Você morreu. ☠️"
}
];
const monsters = [
  {
    name: "Lesma",
    level: 2,
    health: 15 
  },
  {
    name: "Fera",
    level: 8,
    health: 60
  },
  {
    name: "Dragão",
    level: 20,
    health: 300
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
  monsterStats.style.display = "none";
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
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30){
      gold -= 30;
      currentWeapon ++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Agora você tem um " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " Em seu inventário você tem: " + inventory;
    } else {
      text.innerText = "Você não tem ouro suficiente para comprar uma arma."
    }
  } else {
    text.innerText = "Você já tem a arma mais poderosa!";
    button2.innerText = "Vender arma por 15 ouro";
    button2.onclick = sellWeapon;
  }  
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "Você vendeu " + currentWeapon + ".";
    text.innerText += " Em seu inventário você tem: " + inventory;
  } else {
    text.innerText = "Não venda sua única arma!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = 'block';
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth; 
}

function attack(){
  text.innerText = "O monstro "+monsters[fighting].name+" ataca.";
  text.innerText += " Você o ataca com seu "+weapons[currentWeapon].name+".";
  health -= monsters[fighting].level;
  //dano no monstro  = valor da arma atual + (valor aleario entre 1 e valor do XP)
  monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0){
    lose();
  } else if (monsterHealth <= 0){
    defeatMonster();
  }
}

function dodge(){
  text.innerText = "Você evitou o ataque do " + monsters[fighting].name;
}

function defeatMonster(){
  gold += Math.floor(monsters[fighting].level*6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose(){
  update(locations[5]);
}

function restart(){
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["Luva"];
  xpText.innerText = xp;
  healthText.innerText = health;
  goldText.innerText = gold;
  goTown();
}