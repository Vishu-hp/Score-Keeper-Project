const scorePlayer1 = document.querySelector(".scorePlayerOne");
const scorePlayer2 = document.querySelector(".scorePlayerTwo");
const buttonPlayer1 = document.querySelector(".buttonPlayerOne");
const buttonPlayer2 = document.querySelector(".buttonPlayerTwo");
const resetButton = document.querySelector(".reset");
const finalScore = document.querySelector("#selecting-scores");

let score;

const reset = () => {
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    finalScore.value = "3";
    scorePlayer1.classList.remove("winner");
    buttonPlayer1.classList.remove("disable");
    buttonPlayer2.classList.remove("disable");
    scorePlayer2.classList.remove("winner");
    scorePlayer1.classList.remove("loser");
    scorePlayer2.classList.remove("loser");
}

finalScore.addEventListener("change",(event) =>{
    if(scorePlayer1 !== "0" || scorePlayer2 !== "0"){
        score = finalScore.value;
        reset();    
        finalScore.value = score;
    }
})

buttonPlayer1.addEventListener("click",()=>{
    if (finalScore.value !== scorePlayer1.textContent && finalScore.value !== scorePlayer2.textContent &&
        finalScore.value !== ""){
        scorePlayer1.textContent = parseInt(scorePlayer1.textContent) + 1;
    }
    if(finalScore.value === scorePlayer1.textContent){
        scorePlayer1.classList.add("winner");
        buttonPlayer1.classList.add("disable");
        buttonPlayer2.classList.add("disable");
        scorePlayer2.classList.add("loser");
    }
});

buttonPlayer2.addEventListener("click", () => {
    if (finalScore.value !== scorePlayer1.textContent && finalScore.value !== scorePlayer2.textContent &&
        finalScore.value !== ""){
        scorePlayer2.textContent = parseInt(scorePlayer2.textContent) + 1;
    }
    if (finalScore.value === scorePlayer2.textContent) {
        scorePlayer2.classList.add("winner");
        buttonPlayer1.classList.add("disable");
        buttonPlayer2.classList.add("disable");
        scorePlayer1.classList.add("loser");
    }
});

resetButton.addEventListener("click",reset);

