function playGame(playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } 
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput)

    printMessage('Twój ruch to: ' + argPlayerMove);

    console.log('moves:', argComputerMove, argPlayerMove, 'Komputer wygrał: ' + computerScore, 'Gracz wygrał: ' + playerScore);

    const displayResult = function (argComputerMove, argPlayerMove) {
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
            playerScore++;
			playerScoreDisplay.innerHTML = playerScore;
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
            playerScore++;
			playerScoreDisplay.innerHTML = playerScore;
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            playerScore++;
			playerScoreDisplay.innerHTML = playerScore;
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis');
        } else {
            printMessage("Przegrywasz");
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
        }
    }

    displayResult(argComputerMove, argPlayerMove);
   
}
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame('1');
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame('2');
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame('3');
    });