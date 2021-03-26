//Under grid glow ===============================================
(function(){
    const headBlock = document.getElementById('about'),
        light = document.querySelector('.aboutme__light');
    let x = 0,
        y = 0;

    function showThatGrid() {
        light.style.left = x + 'px';
        light.style.top = y + 'px';
        light.style.animationPlayState = 'running';
        setTimeout(function () {
            light.style.animationPlayState = 'paused';
        }, 10);
    }
    function setXY(e){
        x = e.pageX;
        y = e.pageY - headBlock.offsetTop;
        showThatGrid();
        console.log('aaa');
    }

    headBlock.addEventListener('mouseover', () => {
        console.log('over');
        light.style.opacity = 1;
        headBlock.addEventListener('mousemove', setXY);
    });

    headBlock.addEventListener('mouseleave', ()=>{
        console.log('leave');
        light.style.opacity = 0;
        headBlock.removeEventListener('mousemove', setXY);
    });
}());
// smooth scroll ==============================================
function scrollToDiv (duration){
    function getPosition (){
        let div = document.querySelector(clickTargetID);
        let i = div.offsetTop + div.offsetParent.offsetTop;
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
        window.scrollTo (0, easeInOutSine(progress, startPosition, difference, duration));
        if (progress < duration) window.requestAnimationFrame(step);}
}
//easing function
function easeInOutSine(t, b, c, d) {
	return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
}
//To the Top button appearance
let toTop = document.getElementById('toTop'),
    about = document.getElementById('about');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > about.offsetTop-200) {
        toTop.style.display = 'block';
    } else toTop.style.display = 'none';
})
//crutch
toTop.onclick = ()=>{
    toTop.style.opacity = '0';
    setTimeout(function(){
        toTop.style.opacity = '1';
    },800);
}