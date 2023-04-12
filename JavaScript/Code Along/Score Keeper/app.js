const playerOneScore = document.querySelector('#playerOne');
const playerTwoScore = document.querySelector('#playerTwo');
const scoreLimitSelect = document.querySelector('#scoreLimitSelect');
const addPlayerOneScoreButton = document.querySelector('#addPlayerOne');
const addPlayerTwoScoreButtton = document.querySelector('#addPlayerTwo');
const resetScoreButton = document.querySelector('#resetScore');

// ----- Player One -----

// Starting P1 Score
let playOneScore = 0;

// Funciton that adds P1 Score
function addPlayOneScore() {
    playOneScore += 1; 
}

//Funciton to add P1 score and update frontend
addPlayerOneScoreButton.addEventListener('click', (e) => {
    addPlayOneScore();
    playerOneScore.innerText = playOneScore
    if (scoreLimitSelect.value == playOneScore) {
        playerOneScore.style.color = 'green'
        playerTwoScore.style.color = 'red'
        addPlayerOneScoreButton.disabled = true;
        addPlayerTwoScoreButtton.disabled = true;
    }
})

// ----- Player Two ------

// Starting P2 Score
let playTwoScore = 0;

// Funciton that adds P2 Score
function addPlayTwoScore() {
    playTwoScore += 1; 
}

//Funciton to add P2 score and update frontend
addPlayerTwoScoreButtton.addEventListener('click', (e) => {
    addPlayTwoScore();
    playerTwoScore.innerText = playTwoScore
    if (scoreLimitSelect.value == playTwoScore) {
        playerTwoScore.style.color = 'green'
        playerOneScore.style.color = 'red'
        addPlayerOneScoreButton.disabled = true;
        addPlayerTwoScoreButtton.disabled = true;
    }
})

// ----- Reset Button ---

// Function to reset scores
function resetScore () {
    playOneScore = 0;
    playTwoScore = 0;
}

// Links function to reset button
resetScoreButton.addEventListener('click', (e) => {
    resetScore();
    playerOneScore.innerText = playOneScore
    playerTwoScore.innerText = playTwoScore
    playerTwoScore.style.color = 'black'
    playerOneScore.style.color = 'black'
    addPlayerOneScoreButton.disabled = false;
    addPlayerTwoScoreButtton.disabled = false;
})