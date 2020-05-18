const toFormBtn = document.querySelector('.btn');
const cube1 = document.querySelector('.cube');
const cube2 = document.querySelector('.cube2');
const mobileWidth = 529;
const formRight = document.querySelector('.right');
let angleRot = 18;
let angleRot2 = -18;
let windowWidth= window.innerWidth;
let relod=0;

// RELOAD ==========================================================
window.onresize = function(){
    windowWidth = window.innerWidth;
    if (windowWidth < mobileWidth && relod === 1){
      location.reload();
      relod = 2;
    }if (windowWidth > mobileWidth && relod === 2){
      location.reload();
      relod = 0;
}}

//ROTATE CUBE1 TO FORM ==============================================
function toForm (){
    if (windowWidth>=mobileWidth){
        relod=1;
        do{
            angleRot -=90;}
        while (angleRot%360 != -72);
        cube1.style.transform = "translateZ(-170px) rotateY("+ angleRot + "deg)";}
    else {
        relod = 2;
        formRight.style.visibility = "visible";
        formRight.style.transform = "translateX(0)";
    }
}

// ROTATE CUBE1 -90 DEGREES ==========================================
function rotate90 (){
    angleRot -= 90;
    cube1.style.transform = "translateZ(-170px) rotateY("+ angleRot + "deg)";}

// ROTATE CUBE2 90 DEGREES ===========================================
function rotate2_90 (){
    angleRot2 += 90;
    cube2.style.transform = "translateZ(-170px) rotateY("+ angleRot2 + "deg)";}

// BLENDER MORE BUTTON ===============================================
const blendMore = document.getElementById('blender-more');
const blendMoreDiv = document.querySelector('.blender-more');
let mouseOnHide2 = 0;

function blenderMore (show1, show2){
    mouseOnHide2 = 0;
    show1.style.transform = "scale(1)";
    show2.style.transform = "translateY(0)";
    setTimeout(function(){
        mouseOnHide2 = 1;
    }, 600);
    
}
// close menu blener more
blendMoreDiv.addEventListener('mouseover', function () {
    mouseOnHide2 = 0;
})
blendMoreDiv.addEventListener('mouseout', function () {
    mouseOnHide2 = 1;
})
// close by click outside div
function blenderMoreHide (hide1, hide2){
    if (mouseOnHide2 == 1) {
      hide1.style.transform = "scale(0)";
      hide2.style.transform = "translateY(-500px)"
    }else {mouseOnHide2 = 0;}
}
// close by click at the button
function hideIt (hide1, hide2){
    hide1.style.transform = "scale(0)";
    hide2.style.transform = "translateY(-500px)"
}
