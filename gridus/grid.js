const   objDom = document.querySelectorAll('.field__item'),
    form = document.querySelector('.forms'),

    properties = [{name: 'castle', x: 200, y: 160},
        {name: 'knight', x: 800, y: 400},
        {name: 'princess', x: 100, y: 100},
        {name: 'sun', x: 200, y: 600},
        {name:'well', x: 650, y: 150}];

const start = {
    renderObj: function (prop){
        prop.map(item =>{
            const obj = this.getObj(item.name)

            this.setXY(item.x, item.y, obj)
        })
    },
    getObj: function(name){
        for (let i=0; i<objDom.length; i++){
            if (objDom[i].id == name){
                return objDom[i];
            }
        }
    },
    getXY: function(name, addX, addY, obj, method, radius){
        addX = parseInt(addX);
        addY = parseInt(addY);
        properties.map(item =>{
            if (item.name == name){
                if (method != 2){
                    item.x = addX;
                    item.y = addY;
                } else {
                    item.x += addX;
                    item.y += addY;
                }
                this.setXY (item.x, item.y, obj);
                if (method == 3){
                    item.y -= radius;
                }
            }
        })
    },
    setXY: function (x, y, obj){
        obj.classList.remove('aminAround');
        obj.style.transformOrigin = '50% 50%';
        obj.style.left = x +'px';
        obj.style.top = -y +'px';
    }
}

const actions = {
    hideForm:function(form){
        event.preventDefault();
        form.classList.remove('forms__show');
    },
    showForm:function(form){
        form.classList.add("forms__show");
    },
    toSetPos:function(form){
        event.preventDefault();
        const name = form.elements['obj'].value;
        const obj = start.getObj(name);
        const Xcoor = form.elements['Xcoor'].value;
        const Ycoor = form.elements['Ycoor'].value;

        start.getXY(name, Xcoor, Ycoor, obj, 1);
    },
    toMove: function(form){
        event.preventDefault();
        const name = form.elements['obj'].value;
        const obj = start.getObj(name);
        const distance = form.elements['distance'].value;
        const angle = form.elements['angle'].value * Math.PI / 180;

        let addX = Math.round(distance * Math.cos(angle));
        let addY = Math.round(distance * Math.sin(angle));

        start.getXY(name, addX, addY, obj, 2);
    },
    toAround:function(form){
        event.preventDefault();
        const name = form.elements['obj'].value;
        const obj = start.getObj(name);
        const radius = parseInt(Math.abs(form.elements['radius'].value));
        const centerX = parseInt(form.elements['coorX'].value);
        const centerY = parseInt(form.elements['coorY'].value);

        let y = radius + centerY;

        start.getXY(name, centerX, y, obj, 3, radius);
        obj.style.transformOrigin = '50% ' + (50 + radius) + 'px';
        obj.classList.add('aminAround');
    }
}

start.renderObj(properties);
objDom[3].style.transformOrigin = '50% ' + 70 + 'px';;
objDom[3].classList.add('aminAround');

//Knight mechanic
let knight = start.getObj('knight'),
    animEnd = true;

knight.addEventListener('transitionend', ()=>{
    animEnd = true;
})
window.addEventListener("keydown", function (event){
    if (animEnd) {
        if (event.keyCode === 87) {
            animEnd = false;
            properties[1].y += 100;
            knight.style.top = -properties[1].y +'px';
        }
        if (event.keyCode === 83) {
            animEnd = false;
            properties[1].y -= 100;
            knight.style.top = -properties[1].y +'px';
        }
        if (event.keyCode === 65) {
            animEnd = false;
            properties[1].x -= 100;
            knight.style.left = properties[1].x +'px';
        }
        if (event.keyCode === 68) {
            animEnd = false;
            properties[1].x += 100;
            knight.style.left = properties[1].x +'px';
        }
    }

});
