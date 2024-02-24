const body = document.querySelector("body");

// TIME
let  time = 0;
let plusTime = 1000;

setInterval(() => {
    time++;

    if(time % 50 == 0)
        plusTime -= 100;

}, 1000);


//POINT 
let point = 0;

//Game Bar
const gameBar = document.createElement("div");
gameBar.style.border = "1px solid black";
gameBar.style.width = `200px`;
gameBar.style.height = `200px`;
gameBar.style.position = "absolute";
gameBar.style.right = "5%";
gameBar.style.top = "25%";

const barPoint = document.createElement("div");
barPoint.innerHTML = `Puan: ${point}`;


gameBar.appendChild(barPoint);


// Scene
const scene = new Scene();
const sceneElement = scene.sceneElement;

// machine
const machine = new Machine();
const machineElement = machine.machineElement;
sceneElement.appendChild(machineElement);


//BLOCKS

blocks = [];

for(let i=0; i<=10; i++)
{
    let left =  i*10;

    const block = new Block(left=left, health=50, view="cyan");
    blocks.push(block);

    const blockElement = block.blockElement;
    sceneElement.appendChild(blockElement);
}

let totalHealth = 0;

setInterval(() => {
    blocks.forEach(block => {
        block.blockElement.innerHTML = ++block.health;
        totalHealth += block.health;
    });
}, plusTime);


body.appendChild(sceneElement);
body.appendChild(gameBar);

// KEYS CONTROL
document.addEventListener("keydown", (event) => {
    if(event.key == "ArrowLeft") 
    {
        machine.moveLeft();
    }
    if(event.key == "ArrowRight") 
    {
        machine.moveRight();
    }
    if(event.key == " ") //create bullet
    {
        const bullet = new Bullet(left = machine.left);
        bulletElement = bullet.bulletElement;
        sceneElement.appendChild(bulletElement);
        bullet.move(blocks);
    } 
});
