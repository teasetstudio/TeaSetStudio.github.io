const navMenu = document.querySelector('.nav-main');

var dis = 0;
var height = navMenu.scrollHeight;

function buttonMenu (but){
  if (dis == 0) {
    navMenu.style.height = height+"px";
    navMenu.style.marginTop = "5px";
    dis = 1;
    } else {
        navMenu.style.height = 0;
        navMenu.style.marginTop = "-30px";
        dis = 0;
}}