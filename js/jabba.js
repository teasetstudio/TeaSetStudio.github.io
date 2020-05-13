const theToggle= document.getElementById('toggle');

theToggle.onclick = function(){ 
    this.className += ' ' + 'on';
}