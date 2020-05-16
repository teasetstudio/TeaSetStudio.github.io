// burger menu mobile ========================================
const theToggle = document.getElementById('toggle');
let toggleOnOff = 0;
window.onclick = function (){
    if (event.target != theToggle || toggleOnOff == 1){
        theToggle.className = '';
        toggleOnOff = 0;
    }else {
        theToggle.className = 'on';
        toggleOnOff = 1;}
}
// smooth scroll ==============================================
function scrollToDiv (duration){
    function getPosition (){
        let i = document.querySelector(clickTargetID).offsetTop;
        if (clickTargetID == '#about') i -= 100;
        return i;}
    const clickTargetID = event.target.getAttribute('href');
    const targetPosition = getPosition();
    let startPosition = window.pageYOffset;
    let difference = targetPosition - startPosition;
    let start = null;
    if (Math.abs(difference) < 500) duration /= 2;

    window.requestAnimationFrame(step);
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      //window.scrollTo(0, difference*(progress/duration) + startPosition)
      window.scrollTo (0, easeInOutSine(progress, startPosition, difference, duration));
      if (progress < duration) window.requestAnimationFrame(step);}
}
//easing function
function easeInOutSine(t, b, c, d) {
	return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};
// carusel ====================================================
