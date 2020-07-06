let memoInput = document.getElementById('memo-body'),
    clickScore = document.querySelector('#clicks span'),
    IMG_NUM_IN_FOLDER = 130,
    rows = 5, // rows or collums must be even number!!!
    collums = 8,
    numItems = rows * collums,
    cardsList = [],
    players = 1,
    redScore = 0,
    blueScore = 0,
    imageOrder = {
        images: [],
        att: []
    };

let start={
        addElement:function(image, idName, att){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<div id=${idName} target=${att} isopen="no" class="memo">
                                    <div class="memo-face"><img src="./img/${image}"></div>
                                    <div class="memo-back"></div>
                                </div>`;
            memoInput.appendChild(newDiv);
        },
        createTableItem: function(array, att){
            memoInput.innerHTML = "";
            for (let i=0; i<array.length; i++)
                this.addElement (array[i], "A0"+ i, att[i]);
        },
        createArray: function (){
            cardsList = [];
            imageOrder.images = [];
            imageOrder.att = [];
            numItems = rows * collums;
            // image names array (data base) and image order array
            for (let i=1; i<numItems+1; i++){
                let rand = (Math.ceil (Math.random()*IMG_NUM_IN_FOLDER)) + ".png",
                    noRepeat = 0;
                while (noRepeat === 0){
                    noRepeat = 1;
                    for (let i=0; i<cardsList.length; i++){
                        if (cardsList[i]===rand){
                            rand = (Math.ceil (Math.random()*IMG_NUM_IN_FOLDER)) + ".png";
                            noRepeat = 0;
                            break;
                        };
                    };
                };
                cardsList.push (rand);
            }
            //images sequence array (order of cards)
            for (let i=0; i<(numItems/2); i++){
                let randNum1 = Math.floor(Math.random()*numItems),
                    randNum2 = Math.floor(Math.random()*numItems);
                //checker
                while (imageOrder.images[randNum1]){
                    randNum1 = Math.floor(Math.random()*numItems);
                }
                while (randNum1===randNum2 || imageOrder.images[randNum2]){
                    randNum2 = Math.floor(Math.random()*numItems);
                }
                //create array item
                imageOrder.images[randNum1] = cardsList[i];
                imageOrder.images[randNum2] = cardsList[i];
                imageOrder.att[randNum1] = "A"+ i;
                imageOrder.att[randNum2] = "A"+ i;
            };
        }
    };

start.createArray();
start.createTableItem(imageOrder.images, imageOrder.att);

// GAME process
let nextClickIndex = 1, //1 - first memo, 2 - second
    checkOnThirdClick = 1, // check situation whe
    memoOne,
    isOpen,
    attOne,
    attTwo,
    score = 1,
    clicks = 0,
    memoTwo;

let gameActions = {
    definedMemo: function (currentMemo, e){
        currentMemo = e.target.closest(".memo");
        this.openMemo(currentMemo);
        return currentMemo;
    },
    isSimillar: function (){
        if (attOne === attTwo){
            memoOne="";
            memoTwo="";
            score ++;
        } else {
            this.closeMemo (memoOne);
            this.closeMemo (memoTwo);
            memoOne = "";
            memoTwo = "";
        }
    },
    winGame: function (){
        if (players == 2){
            if (redScore > blueScore){
                alert ('Выйграл КРАСНЫЙ игрок!! Собрав ' + redScore + ' мемок.');
            } else if(redScore < blueScore){
                alert ('Выйграл СИНИЙ игрок!! Собрав ' + blueScore + ' мемок.');
            }else alert ('Ничья...');
            alert ("Вместе вы справились за " + clicks + " кликов.");
            playerTwo();
        }else {
            alert ("Поздравляю! Ты выйграл!" + "\nТы справился за " + clicks + " кликов.");
            playerOne();
        };
    },
    openMemo: function (memo){
        memo.style.transform = "rotateY(0deg)";
        memo.setAttribute ("isopen", "da");
        clicks++;
        clickScore.innerHTML = clicks;
    },
    closeMemo: function (memo){
        memo.style.transform = "rotateY(180deg)";
        memo.setAttribute ("isopen", "no");
    }
};
window.onclick = function (e){
    currentMemo = e.target.closest(".memo");
    isOpen = currentMemo.getAttribute("isopen");
    if (checkOnThirdClick === 3){
        gameActions.isSimillar();
        checkOnThirdClick = 1;
    }
    if (nextClickIndex === 1 && isOpen != "da"){
        memoOne = gameActions.definedMemo (memoOne, e);
        attOne = memoOne.getAttribute("target");
        nextClickIndex = 2;
        checkOnThirdClick++;
    } else if (nextClickIndex === 2 && isOpen != "da"){
        memoTwo = gameActions.definedMemo (memoTwo, e);
        attTwo = memoTwo.getAttribute("target");
        if (players==2){
            playersScore.isSimillar();
        };
        nextClickIndex = 1;
        checkOnThirdClick++;
        if (score == numItems/2){
            memoTwo.addEventListener ('transitionend', function(){
                gameActions.winGame()})}
    }
};

let menuDiv = document.getElementById('menu'),
    recordsLvl1 = document.getElementById('level-1'),
    recordsLvl2 = document.getElementById('level-2'),
    closeMenuFunction = function (){
        menuDiv.style.transform = "translateX(-400px)";    
        menuDiv.removeEventListener('onmouseleave', closeMmenu);
    };

/* open/close menu */
function openMenu (){
    menuDiv.style.transform = "translateX(0px)"; 
};
menuDiv.onmouseleave = function(){
    closeMenuFunction();
};
menuDiv.onclick = function(){
    closeMenuFunction();
};
/* MENU LEVELS */
function normStart(){
    clicks = 0;
    nextClickIndex = 1;
    checkOnThirdClick = 1;
    score = 1;
    rows = 5;
    collums = 8;
    clickScore.innerHTML = clicks;
    memoInput.style.setProperty('max-width', '1400px');
    start.createArray();
    start.createTableItem(imageOrder.images, imageOrder.att);
    recordsLvl1.style.display = 'block';
    recordsLvl2.style.display = 'none';
};
function hardStart(){
    clicks = 0;
    nextClickIndex = 1;
    checkOnThirdClick = 1;
    score = 1;
    rows = 6;
    collums = 10;
    clickScore.innerHTML = clicks;
    memoInput.style.setProperty('max-width', '1700px');
    start.createArray();
    start.createTableItem(imageOrder.images, imageOrder.att);
    recordsLvl1.style.display = 'none';
    recordsLvl2.style.display = 'block';
// smooth scroll
    let timerA = setInterval(function() {
        if (window.pageYOffset > 70) clearInterval(timerA);
        window.scrollBy (0, 5)
    }, 30)
};

// player counter
let records = document.getElementById('records'),
    divTwoPlayers = document.getElementById('twoPlayers'),
    slider = document.getElementById('playerSlider'),
    redBtn = document.getElementById('redPlayer'),
    blueBtn = document.getElementById('bluePlayer'),
    redPlayer = document.querySelector('#redPlayer span'),
    bluePlayer = document.querySelector('#bluePlayer span'),
    currentPlayer; //1 -red, 2-blue

let playersScore = {
    showActive: function (){
        if (currentPlayer == 1){
            slider.style.transform = "translateX(-450px)";
            slider.style.backgroundColor = "rgb(255, 226, 208)";
            redBtn.style.boxShadow = "0 4px 8px 0";
            redBtn.style.transform = "scale(1.1)";
            redBtn.style.background = "rgb(218, 139, 91)";
            blueBtn.style.boxShadow = "0 0 0 0";
            blueBtn.style.transform = "scale(1)";
            blueBtn.style.background = "rgb(136, 171, 187)";
        } else {
            slider.style.transform = "translateX(330px)";
            slider.style.backgroundColor = "rgb(202, 244, 255)";
            redBtn.style.boxShadow = "0 0 0 0";
            blueBtn.style.boxShadow = "0 4px 8px 0";
            redBtn.style.transform = "scale(1)";
            blueBtn.style.transform = "scale(1.1)";
            redBtn.style.background = "rgb(207, 167, 143)";
            blueBtn.style.background = "rgb(72, 161, 202)";
        };
    },
    isSimillar: function (){
        if (attOne === attTwo){
            this.openMemoPair();
        } else {
            if (currentPlayer == 1) currentPlayer = 2;
            else currentPlayer = 1;
            this.showActive();
        }
    },
    openMemoPair: function(){
        let memoOneBG = memoOne.querySelector('.memo-face'),
            memoTwoBG = memoTwo.querySelector('.memo-face');
        if (currentPlayer == 1){
            redScore++;
            redPlayer.innerHTML = redScore;
            memoOneBG.style.background = 'rgb(218, 139, 91)';
            memoTwoBG.style.background = 'rgb(218, 139, 91)';
        }else{
            blueScore++;
            bluePlayer.innerHTML = blueScore;
            memoOneBG.style.background = 'rgb(72, 161, 202)';
            memoTwoBG.style.background = 'rgb(72, 161, 202)';
        };
    }
}
function playerOne (){
    players = 1;
    divTwoPlayers.style.display = 'none';
    if (rows == 5){
        normStart();
    }else{
        hardStart();
    };
};
function playerTwo (){
    redScore = 0;
    blueScore = 0;
    redPlayer.innerHTML = redScore;
    bluePlayer.innerHTML = blueScore;
    players = 2;
    currentPlayer = Math.ceil (Math.random()*2);
    divTwoPlayers.style.display = 'flex';
    playersScore.showActive();
    if (rows == 5){
        normStart();
    }else{
        hardStart();
    };
    
};