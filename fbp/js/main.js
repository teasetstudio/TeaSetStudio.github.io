const toFormBtn = document.querySelector('.btn');
const cube1 = document.querySelector('.cube');
const cube2 = document.querySelector('.cube2');
let angleRot = 18;
let angleRot2 = -18;

//ROTATE CUBE1 TO FORM ==============================================
function rotateToForm (){
    do{
        angleRot -=90;}
    while (angleRot%360 != -72);
    cube1.style.transform = "translateZ(-170px) rotateY("+ angleRot + "deg)";
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
    if (!blendMoreDiv.onmouseover) {
      hide1.style.transform = "scale(0)";
      hide2.style.transform = "translateY(-500px)"
    }else {mouseOnHide2 = 0;}
}
// close by click at the button
function hideIt (hide1, hide2){
    hide1.style.transform = "scale(0)";
    hide2.style.transform = "translateY(-500px)"
}
