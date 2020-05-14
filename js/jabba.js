const theToggle = document.getElementById('toggle');
let toggleOnOff = 0;

window.onclick = function (e){
    alert(e.target);
    if (e.target != theToggle || toggleOnOff == 1){
        theToggle.className = '';
        toggleOnOff = 0;
    }else {
        theToggle.className = 'on';
        toggleOnOff = 1;}
}