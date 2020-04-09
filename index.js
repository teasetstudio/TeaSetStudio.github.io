let heading = document.querySelector('.seeLater'),
    cssReadyBtn = document.getElementById('cssReady'),
    nameInput = document.getElementsByName('contName')[0],
    text = document.getElementsByName('message')[0];

console.log(heading);


function makeCounter () {
    var currentC = 1;
    return function () {
        return currentC++;
    }
}

let exodusText;
function ready () {
    exodusText = heading.textContent;
    heading.textContent = "Are you ready?";
}
function exodus() {
    heading.textContent=exodusText;
}

cssReadyBtn.addEventListener('mouseenter', ready);

cssReadyBtn.addEventListener('mouseleave', exodus); 

nameInput.addEventListener ('input', function() {
    text.value = `i Know you name, ${nameInput.value}. `;
});