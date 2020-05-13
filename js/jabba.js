const theToggle= document.getElementById('toggle');
let toggleOnOff = 0;

theToggle.onclick = function(){ 
    if (toggleOnOff == 0){
        this.className += ' ' + 'on';
        toggleOnOff = 1;
    }else {
        this.className = '';
        toggleOnOff = 0;
}}