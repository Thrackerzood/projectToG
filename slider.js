let left = document.querySelector('.left')
let right = document.querySelector('.right')
let allPosition = 0;
window.addEventListener('load',()=>{  
   let  discount = document.querySelector('.discount')
   const heightWindow = discount.clientWidth;
   slider(heightWindow,discount)
})
window.addEventListener('resize',()=>{  
let  discount = document.querySelector('.discount')
const heightWindow = discount.clientWidth;
slider(heightWindow,discount)
})
left.addEventListener('click',()=>{
   let  discount = document.querySelector('.discount')
   const heightWindow = discount.clientWidth;
   leftClick(heightWindow)
})
right.addEventListener('click',()=>{
   let  discount = document.querySelector('.discount')
   const heightWindow = discount.clientWidth;
   rightClick(heightWindow)
})
function slider(height){
   let  all_discount = document.querySelector('.all_discount')
   all_discount.style.width = (height * 6) + 'px';
   allPosition = 0;
   all_discount.style.left = 0 + 'px'
}
function leftClick(height){
   allPosition = allPosition + height;
   let  all_discount = document.querySelector('.all_discount')
   if(allPosition> 0){
      allPosition = - 5 * height;
   }
   all_discount.style.left = allPosition + 'px'  
}
function rightClick(height){
   allPosition = allPosition - height;
   let  all_discount = document.querySelector('.all_discount')
   if(allPosition < - 5 * height){
      allPosition = 0
   }
   all_discount.style.left = + allPosition + 'px'
}
