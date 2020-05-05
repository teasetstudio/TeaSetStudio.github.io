const navMenu = document.querySelector('.nav-main');

const menuBtn = document.querySelector ('#menuBtn');

var dis = 0;
menuBtn.addEventListener('click', ()=>{
    if (dis == 0) {
    navMenu.style.display = "block";
    dis = 1;
    } else {
        navMenu.style.display = "none";
        dis = 0;
    }
});