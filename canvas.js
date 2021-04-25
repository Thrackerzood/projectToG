let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let x = 0;
let y = 0;
canvas.width  = 600;
canvas.height = 400;
let date = document.querySelector('.date')
let input = document.querySelector('.input_p')

input.addEventListener('click', ()=>{

console.log(date.value)
})

function drawRect(x = 0,y = 0){
      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(600,50);
      ctx.lineTo(0,50);
      ctx.moveTo(600,100);
      ctx.lineTo(0,100);
      ctx.moveTo(600,150);
      ctx.lineTo(0,150);
      ctx.moveTo(600,200);
      ctx.lineTo(0,200);
      ctx.moveTo(600,250);
      ctx.lineTo(0,250);
      ctx.moveTo(600,300);
      ctx.lineTo(0,300);
      ctx.moveTo(600,350);
      ctx.lineTo(0,350);
      ctx.closePath();
      ctx.stroke();
}

drawRect(x,y)