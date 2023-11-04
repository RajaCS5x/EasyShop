let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


function prod1(){
  document.querySelector('.box1').style.display="flex";
  var a=document.querySelector('.content1 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content1 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=(valprice+4.99);
  sum=sum+b.innerHTML;
}
function trash1(){
  var a=document.querySelector('.content1 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>1){
    a.innerHTML=val-1;
    var b=document.querySelector('.content1 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML=0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box1').style.display= 'none';
  }
}
function prod2(){
  document.querySelector('.box2').style.display="flex";
  var a=document.querySelector('.content2 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content2 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=valprice+4.99;
  sum=sum+b.innerHTML;
}
function trash2(){
  var a=document.querySelector('.content2 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>1){
    a.innerHTML=val-1;
    var b=document.querySelector('.content2 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML=0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box2').style.display= 'none';
  }
}
function prod3(){
  document.querySelector('.box3').style.display="flex";
  var a=document.querySelector('.content3 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content3 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=valprice+4.99;
  sum=sum+b.innerHTML;
}
function trash3(){
  var a=document.querySelector('.content3 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>1){
    a.innerHTML=val-1;
    var b=document.querySelector('.content3 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML=0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box3').style.display= 'none';
  }
}
function prod4(){
  document.querySelector('.box4').style.display="flex";
  var a=document.querySelector('.content4 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content4 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=valprice+4.99;
 
}
function trash4(){
  var a=document.querySelector('.content4 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>1){
    a.innerHTML=val-1;
    var b=document.querySelector('.content4 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML=0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box4').style.display= 'none';
  }
}
function prod5(){
  document.querySelector('.box5').style.display="flex";
  var a=document.querySelector('.content5 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content5 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=valprice+4.99;
  
}
function trash5(){

  var a=document.querySelector('.content5 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>0){
    a.innerHTML=val-1;
    var b=document.querySelector('.content5 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML= 0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box5').style.display= 'none';
  }
}
function prod6(){
  document.querySelector('.box6').style.display="flex";
  var a=document.querySelector('.content6 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content6 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=valprice+4.99;
 
}
function trash6(){
  var a=document.querySelector('.content6 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>1){
    a.innerHTML=val-1;
    var b=document.querySelector('.content6 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML=0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box6').style.display= 'none';
  }
}
function prod7(){
  document.querySelector('.box7').style.display="flex";
  var a=document.querySelector('.content7 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content7 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=valprice+4.99;
  
}
function trash7(){
  var a=document.querySelector('.content7 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>1){
    a.innerHTML=val-1;
    var b=document.querySelector('.content7 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML=0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box7').style.display= 'none';
  }
}
function prod8(){
  document.querySelector('.box8').style.display="flex";
  var a=document.querySelector('.content8 .quantity span');
  var val=parseFloat(a.innerHTML);
  a.innerHTML=val+1;

  var b=document.querySelector('.content8 .price span');
  var valprice=parseFloat(b.innerHTML);
  b.innerHTML=valprice+4.99;
  
}
function trash8(){
  var a=document.querySelector('.content8 .quantity span');
  var val=parseFloat(a.innerHTML);
  if(val>1){
    a.innerHTML=val-1;
    var b=document.querySelector('.content8 .price span');
  var valprice=parseFloat(b.innerHTML);
  if(a.innerHTML==0){
    b.innerHTML=0;
  }
  else{
    b.innerHTML=valprice- 4.99;
  }
 
  }
  else{
    document.querySelector('.box8').style.display= 'none';
  }
  
}

function searchform(){
  var a=document.querySelector('.search-form #search-box').value;
 document.querySelector('.search-form a').setAttribute('href',`#${a}`);
  
}
 
