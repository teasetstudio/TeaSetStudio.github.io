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

var oldWid = window.innerWidth;
window.onresize = function(){
  if (oldWid < 529 && oldWid < window.innerWidth && window.innerWidth > 529){
    location.reload();
    oldWid = window.innerWidth;
  }else oldWid = window.innerWidth;
}