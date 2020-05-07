// MOBILE DROPDOWN MENU ANIMATION =================================
const navMenu = document.querySelector('.nav-main');
var dis = 0;
var relod = 0;
function buttonMenu (){
  var height = navMenu.scrollHeight;
  if (dis == 0) {
    navMenu.style.height = height+"px";
    navMenu.style.marginTop = "5px";
    dis = 1;
    relod = 7;
    } else {
      navMenu.style.height = 0;
      navMenu.style.marginTop = "-30px";
      dis = 0;
}}

// refresh break point 529px if mobile menu is used =============
window.onresize = function(){
  if (window.innerWidth > 529 && relod > 0){
    location.reload();
    relod = 0;
}}

// set zoom event (external code)==================================
window.onzoom = function(e) {
	// zoom event
};
// detect resize
(function() {
	var oldresize = window.onresize;
	window.onresize = function(e) {
    var event = window.event || e;
    if(typeof(oldresize) === 'function' && !oldresize.call(window, event)) {
      return false;
    }
    if(typeof(window.onzoom) === 'function') {
      return window.onzoom.call(window, event);
    }
  }
})();