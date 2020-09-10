let light = document.querySelector('.aboutme__light'),
    x = 0,
    y = 0;

function showGrid(headBlock){
    headBlock.onmousemove = ()=>{
        x = event.pageX;
        y = event.pageY - headBlock.offsetTop;
        light.style.left = x + 'px';
        light.style.top = y + 'px';
        light.style.animationPlayState = 'running';
        setTimeout(function(){
            light.style.animationPlayState = 'paused';
        },10);
        light.style.opacity = 1;
    }
    headBlock.onmouseleave = function (){
        light.style.opacity = 0;
    }
};
