


const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const againBtn = document.querySelector(".again-btn");
var hint = document.querySelector(".hint span")
var wrongLetter = document.querySelector(".wrong-letter span")
var typingInput = document.querySelector(".typing-input")
var guessLeft = document.querySelector(".guess-left span")


const gameWin = document.querySelector(".gameWin")
const letterWin = document.querySelector(".content .gameWin .letterWin")
const gameOver = document.querySelector(".gameOver")

var word, maxGuesses, corrects = [], incorrects = [];


function randomWord() {

    maxGuesses = 8;
    typingInput.style.display = "flex";
    gameWin.style.display = "none";
    gameOver.style.display = "none"
    
    var ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxGuesses = 8; corrects = [], incorrects = [];
    console.log(word);

    hint.innerText = ranObj.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;

    var html = "";

    for (let i = 0; i < word.length; i++) {

        html += `<input type="text" disabled>`;


    }

    inputs.innerHTML = html;
}

randomWord()


function initGame(e) {

    var key = e.target.value;
    

    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {

        console.log(key);

        if(word.includes(key)) {

           for(let i = 0; i < word.length; i++) {

               if(word[i] === key) {

                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;

               }

           }

        }

        else{

            maxGuesses --;
            incorrects.push(` ${key}`);

        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrects;

    }
    typingInput.value = "";

    if(corrects.length === word.length) {

        gameWin.style.display = "flex";
        typingInput.style.display = "none"
        letterWin.innerText = word
        againBtn.style = "flex"
    }

    else {

    }


    if(maxGuesses < 1) {

        gameOver.style.display = "flex"
        typingInput.style.display = "none"
        againBtn.style.display = "flex"

        // mostrar palavra
        // for(let i = 0; i< word.length; i++){

        //     inputs.querySelectorAll("input")[i].value = word[i]

    
        // }


        

    }


}



function resetGame() {
    againBtn.style.display = "none"
    maxGuesses = 8;
    gameOver.style.display = "none";
    typingInput.style.display = "flex";

    incorrects = []
    corrects = []
    

    for(let i = 0; i < word.length; i++) {

        inputs.querySelectorAll("input")[i].value = "";

    }

    wrongLetter.innerText = "";
    
    guessLeft.innerText = maxGuesses;
    
}



againBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());