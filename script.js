//const canvas = document.querySelector('.canvas__item');
//ctx = canvas.getContext('2d');
//ctx.fillRect(0, 0, canvas.width, canvas.height);

const canvas = document.querySelector(".canvas__item");
const ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;


const draw1 = () => {
  ctx.fillStyle = 'green';
  ctx.clearRect(0,0,512,512);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw2() {
  const canvas = document.querySelector(".canvas__item");
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,512,512);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,0,512,256);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,257,512,512);
  }
}

const draw3 = () => {
  const image = new Image;
  image.src = './assets/images/image.png';
  image.addEventListener("load",() =>{
    ctx.clearRect(0,0,512,512);
    ctx.drawImage(image,0,0,512,512);
  })
}

document.querySelector('.item_size1').addEventListener('click', () => {draw1();})

document.querySelector('.item_size2').addEventListener('click', () => {draw2();})

document.querySelector('.item_size3').addEventListener('click', () => {draw3();})
