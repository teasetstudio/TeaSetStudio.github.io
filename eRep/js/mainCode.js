let elemVisibility = {
    iRotateON: function(iElement, ulElement){
        iElement.style.transform = 'rotate(180deg)';
        ulElement.style.display = 'block';},
    iRotateOFF: function(iElement, ulElement){
        iElement.style.transform = 'rotate(0deg)';
        ulElement.style.display = 'none';}
}
function toRotate(priceElement){
    let isOn = priceElement.getAttribute("isOn");
    let iElem = priceElement.querySelector('h3>i');
    let ulElem = priceElement.querySelector('h3+ul');

    if (window.innerWidth<=1000){
        if (isOn ==='no') {
            elemVisibility.iRotateON(iElem, ulElem);
            priceElement.setAttribute('isOn', 'yes')}
        else {
            elemVisibility.iRotateOFF(iElem, ulElem);
            priceElement.setAttribute('isOn', 'no')}   
    }else return false;
}
