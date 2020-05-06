// MOBILE DROPDOWN MENU;
const navMenu = document.querySelector('.nav-main');
var dis = 0;

function buttonMenu (){
  var height = navMenu.scrollHeight;
  if (dis == 0) {
    navMenu.style.height = height+"px";
    navMenu.style.marginTop = "5px";
    dis = 1;
    } else {
        navMenu.style.height = 0;
        navMenu.style.marginTop = "-30px";
        dis = 0;
}}