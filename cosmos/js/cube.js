let activeCube = document.querySelector('.cube__active'),
    activeBlock = document.querySelector('.fire_active'),
    cubes = document.querySelectorAll('.cube__side');

    let changer = {
    cubes:function(toActive){
        activeCube.classList.remove('cube__active');
        toActive.classList.add('cube__active');
        activeCube = toActive;
        this.block(activeCube.classList[1]);
    },
    block:function(cubeClassName,blockClass){
        activeBlock.classList.remove('fire_active');
        blockClass = cubeClassName.replace('cube_', 'fire');
        activeBlock = document.getElementById(blockClass);
        activeBlock.classList.add('fire_active');
    }
}

for (let i=0; i<cubes.length; i++)
    cubes[i].onclick = function(e){
        changer.cubes (e.target);
    }