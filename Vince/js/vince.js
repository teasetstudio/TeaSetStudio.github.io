const navMenu = document.querySelector('.nav-main');

var dis = 0;
var height = navMenu.scrollHeight;

function buttonMenu (but){
  if (dis == 0) {
    navMenu.style.height = height+"px";
    dis = 1;
    } else {
        navMenu.style.height = 0;
        dis = 0;
}}