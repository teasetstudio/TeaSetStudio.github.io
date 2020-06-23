let memoInput = document.getElementById('memo-body'),
    clickScore = document.querySelector('#clicks span'),
    IMG_NUM_IN_FOLDER = 47,
    rows = 5,
    collums = 8,
    numItems = rows * collums, // must be even number!!!
    cardsList = [],
    imageOrder = {
        images: [],
        att: []
    };

let start={
        addElement:function(image, idName, att){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<div id=\"" + idName + "\" target=\"" + att + "\" isopen=\"no\" class=\"memo\"><div class=\"memo-face\"><img src=\"./img/"+ image + "\"></div>  <div class=\"memo-back\"></div>  </div>";
            memoInput.appendChild(newDiv);
        },
        createTableItem: function(array, att){
            for (let i=0; i<array.length; i++)
                this.addElement (array[i], "A0"+ i, att[i]);
        },
        createArray: function (){

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
            };

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
        alert ("Поздравляю! Ты выйграл!" + "\nВы справились за " + clicks + " кликов.");
        location.reload();
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
        nextClickIndex = 1;
        checkOnThirdClick++;
        if (score == numItems/2){
            memoTwo.addEventListener ('transitionend', function(){
                gameActions.winGame()})}
    }
};
