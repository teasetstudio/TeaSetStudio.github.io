const toFormBtn = document.querySelector('.btn');
const cube1 = document.querySelector('.cube');
const cube2 = document.querySelector('.cube2');
var angleRot = 18;
var angleRot2 = 165;

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





// CHOOSE ANIMATIONS FOR CUBE2 =======================================
// var radioAnim2 = document.getElementsByName('cubeAnimation');
// const cube2 = document.querySelector ('.cube2');

// for (var i = 0; i<radioAnim2.length; i++){
//    radioAnim2[i].onchange = changeAnim;}

// function changeAnim(){
//     if (this.value == 'one'){
//         cube2.style.animationPlayState = "running";
//         cube2.style.animationName = "halfCircleAnim";
//         cube2.style.animationDuration = "5s";
//         cube2.style.animationDirection = "alternate";
//         cube2.style.animationTimingFunction = "ease-in-out";
//         cube2.style.animationIterationCount = "infinite";
//     }
//     else if (this.value == 'two'){
//         cube2.style.animationPlayState = "running";
//         cube2.style.animationName = "circleAnim";
//         cube2.style.animationDuration = "20s";
//         cube2.style.animationDirection = "normal";
//         cube2.style.animationTimingFunction = "linear";
//         cube2.style.animationIterationCount = "infinite";
//     } else {
//         cube2.style.animationDuration = "20s";
//         cube2.style.animationName = "aninOff";
//         cube2.style.animationIterationCount = "1";
// }}