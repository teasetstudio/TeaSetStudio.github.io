/* header logic */
const menuBtn = document.getElementById('menu-btn'),
      menu = document.getElementById('menu');
      
menuBtn.onmouseover = function(){
    menu.style.top = 0;
};
menu.onmouseleave = function(){
    this.style.top = '-100px';
}

/* game logic
==================================================================================== */
const wordsArr = ['соль','сахар', 'кот', 'собака', 'поршень', 'клен', 'дача', 'рождество', 'зима', 'весна',
                  'маяк','любовь', 'цветок', 'туча', 'деньги', 'монета', 'звезда', 'платье', 'арбуз',
                  'молоко', 'кефир', 'церковь', 'крест', 'ананас', 'апельсин', 'август', 'дорога', 'успех',
                  'урожай', 'добро', 'сердце', 'погода', 'счастье', 'дом', 'слон', 'кенгуру',
                  'зло', 'радость', 'море', 'камень', 'песок', 'зерно', 'монитор', 'клавиатура', 'спасение',
                  'вифлеем', 'город', 'компьютер', 'голгофа', 'евангелие', 'вода', 'огонь',
                  'скамейка', 'дрова', 'дверь', 'солнце', 'поведение', 'цвет', 'свет', 'книга', 'заповедь',
                  'образование', 'пони', 'лошадь', 'песня', 'разум', 'мудрость', 'банан', 'столица', 'осел'
                  , 'крокодил', 'аптека', 'мастерская', 'магистраль', 'сказка'],

      attemptDiv = document.getElementById('attempts'),
      hammer = document.getElementById('pic-hammer'),
      hidedWord = document.getElementById('hided-word'),
      letterBtn = document.getElementById('letter-btn'),
      letterInput = document.getElementById('letter-input'),
      regexRu = /[а-яА-ЯЁё]/,
      scoreDiv = document.getElementById('score'),
      timer = document.getElementById('timer'),
      usedLettersDiv = document.getElementById('usedLetters'),
      wordsDiv = document.getElementById('words-guessed');

let attemptDivsList = [],
    complexity = 13,
    currentLetter,
    curScore = 0,
    guessedLetters = 0,
    guessedWords = 0,
    lettersArr = [],
    letterDivsList = [],
    score = 0,
    seconds = 0,
    timerVar = 0,
    usedLetters = [],
    varSecondForInfo = 0,
    wrongLetters = [],
    wordLength;

/* reset function */
function reset (){
    currentLetter;
    guessedLetters = 0;
    lettersArr = [];
    letterDivsList = [];
    seconds = 0;
    timerVar = 0;
    usedLetters = [];
    wrongLetters = [];
    wordLength;
    attemptDiv.innerHTML = "";
    hidedWord.innerHTML = "";
    usedLettersDiv.innerHTML = "";
    timer.innerHTML = "0";
    clearInterval(timerClock);    
};
/* score */
function calcScore (){
    curScore = 1 + (Math.round((guessedWords*15 + 500)/(1.3 + (wrongLetters.length) + (seconds/20))/100));
    score = score + curScore;
    return score; 
}
/*timer*/
let timerClock;
function clock(){
    seconds++;
    timer.innerHTML = seconds;
};
/* start game ========================================= */
let start = {
    addElement:function(letter){
        let newLetter = document.createElement('div');
        newLetter.className = 'letter-box';
        newLetter.innerHTML = `<div class='letter-wrapper'>
                                    <div class='letter'>${letter}</div>
                                    <div class='backface'></div>
                                </div>`;
        hidedWord.appendChild(newLetter);
    },
    addAttemptElement:function(){
        let newAttempt = document.createElement('div');
        newAttempt.className = 'attempt-box';
        attemptDiv.appendChild(newAttempt);
    },
    randomWord:function(){
        let indexLength = wordsArr.length - 1,
            wordIndex = Math.ceil(Math.random() * indexLength);
        return wordsArr[wordIndex];
    },
    lettersArray:function(word){
        lettersArr = word.split('');
        wordLength = lettersArr.length;
    },
    createWordTable:function(){
        for (let i = 0; i < complexity; i++){
            this.addAttemptElement();
        }
        attemptDivsList = document.querySelectorAll(".attempt-box");

        for (let i = 0; i < wordLength; i++){
            this.addElement(lettersArr[i]);
        }
        letterDivsList = document.querySelectorAll(".letter-wrapper");
    }
};
start.lettersArray(start.randomWord());
start.createWordTable();

/* game proceed ========================================= */
let gameActions = {
    getLetter:function(){
        currentLetter = letterInput.value.toLowerCase();
        this.checkLetter();
        letterInput.value = '';
        letterInput.focus();
    },
    checkLetter:function(){
        let isRepeat = this.inputLetterRepeat(),
            isFindLet = false;
        if(regexRu.test(currentLetter) == true && !isRepeat){
            lettersArr.forEach((element, index) => {
                if (element == currentLetter){
                    this.openLetter(index);
                    isFindLet = true;
                }
            });
            usedLetters.push (currentLetter);
            if (!isFindLet){
                this.addUsedLetter(currentLetter);
                wrongLetters.push (currentLetter);
                this.breakAttemptDiv();
            };
            if (timerVar == 0) {
                timerVar = 1;
                timerClock = setInterval(() => clock(), 2000);
            }
        }else if (isRepeat){
            alert ('Вы уже вводили эту букву. \nПожалуйста, введите другую!');
        }else alert('Введите одну Русскую БУКВУ. \nПроверьте язык раскладки клавиатуры.');
    },
    inputLetterRepeat: function (){
        let x = false
        usedLetters.forEach ((element) =>{   
            if (element == currentLetter) { 
                x = true;
            }
        })
        return x;
    },
    openLetter:function(index){
        letterDivsList[index].style.transform = 'translateY(0px)';
        guessedLetters++;
        if (guessedLetters === wordLength) {
            letterDivsList[index].addEventListener('transitionend', () => {
                this.winWord();
            })
        };
    },
    addUsedLetter:function(usedLetter){
        let newLetter = document.createElement('p');
        newLetter.className = 'usedLetter-item';
        newLetter.innerHTML = usedLetter;
        usedLettersDiv.appendChild(newLetter);
    },
    breakAttemptDiv:function(){
        let leftPos = attemptDivsList[wrongLetters.length-1].offsetLeft + 23;
        letterInput.disabled = true;
        hammer.style.left = leftPos + 'px';
        hammer.animate ([
            {transform: 'rotate(0deg)'},
            {transform: 'rotate(-47deg)'},
            {transform: 'rotate(-24deg)'},
            {transform: 'rotate(0deg)'}
        ],  {
        duration: 1000,
        easing: 'ease-in',
        iterations: 1
        });

        attemptDivsList[wrongLetters.length-1].style.background = 'rgb(36, 28, 65)';
        attemptDivsList[wrongLetters.length-1].style.borderColor = 'rgb(25, 16, 58)';
        attemptDivsList[wrongLetters.length-1].style.boxShadow = '-1px 0 20px rgb(29, 0, 32), 0 1px 60px var(--border4)';    

        attemptDivsList[wrongLetters.length-1].addEventListener('transitionend', () => {
            letterInput.disabled = false;
            letterInput.focus();
            if (wrongLetters.length >= complexity && event.propertyName == "box-shadow"){
                this.looseWord();
            };
        });
    },
    winWord:function(){
        guessedWords++;
        score = calcScore();
        scoreDiv.innerHTML = score;
        wordsDiv.innerHTML = guessedWords;
        reset();
        alert ('Ты отгадал слово, поздравляю!! \n+' + curScore + ' очков(а)');
        start.lettersArray(start.randomWord());
        start.createWordTable();
        
    },
    looseWord:function(){
        alert ('Ты проиграл, набрав '+ score + ' очков(а), поздравляю...');

        guessedWords = 0;
        score = 0;
        scoreDiv.innerHTML = score;
        wordsDiv.innerHTML = guessedWords;
        hammer.style.left = '47%';

        reset();
        start.lettersArray(start.randomWord());
        start.createWordTable();
    }
};
letterInput.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        letterBtn.click();
    }
});
letterBtn.onclick = function(){
    gameActions.getLetter();
};
function info (){
    console.log('');
    console.log('Current word: ' + lettersArr);
    console.log('Score: ' + score);
    console.log('Score per last round: ' + curScore);
    console.log('');
    console.log('Score per round formula: 1 + (Math.round((guessedWords*15 + 500)/(1.5 + (wrongLettersNum/2.5) + (seconds/20))/100))');
    console.log('');
    console.log(wrongLetters);
    console.log(wrongLetters.length);
};