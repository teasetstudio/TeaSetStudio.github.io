//burger menu
let burgerBtn = document.querySelector('.burger-btn'),
    burgerWindow = document.querySelector('.burger-menu'),
    burgerMenu = document.querySelector('.burger'),
    closeBtn = document.querySelector('.close-btn p');

burgerBtn.onclick = function (){
    burgerWindow.style.zIndex = '10';
    burgerMenu.style.transform = 'translateX(0%)';
}
closeBtn.onclick = function (){
    burgerMenu.style.transform = 'translateX(100%)';
    setTimeout(function(){
      burgerWindow.style.zIndex = '-1';
    },500);  
}

//nav underline slide on mouseover
let navField = document.querySelector('.nav');
let navActive = document.querySelector('.nav-active');
let xActive = navActive.offsetLeft + navActive.offsetWidth/2;

navField.style.setProperty('--underlinePos', xActive+'px');

navField.onmousemove = function(e){
    var x = e.offsetX;
    this.style.setProperty('--underlinePos', x +'px');
}
navField.onmouseout = function(){
    this.style.setProperty('--underlinePos', xActive+'px');
}