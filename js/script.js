function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if(argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } 
        /* else {
            return 'nieznany ruch';
        } */
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);
    /*
    if(randomNumber == 1){
    computerMove = 'kamień';
    } else if (randomNumber == 2) {
    computerMove = 'papier';
    } if(randomNumber == 3) {
    computerMove = 'nożyce';
    }
    */
    printMessage('Mój ruch to: ' + argComputerMove);

    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput)

    /* 
    if(playerInput == '1'){
    playerMove = 'kamień';
    } else if (playerInput== '2'){
        playerMove= "papier";
    } else if (playerInput== '3'){
        playerMove= "nożyce";
    } else {
        playerMove = 'nieznany ruch';
    }
    */
    printMessage('Twój ruch to: ' + argPlayerMove);

    console.log('moves:', argComputerMove, argPlayerMove);
    function displayResult(argComputerMove, argPlayerMove) {
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Przegrywasz!');
        }
    /*
    // nieprawidłowy ruch
        else if (argPlayerMove == 'nieznany ruch'){
            printMessage('Nieopowiedni ruch, wpisz od 1-3')
        }
    */
    // remis
        else {
            printMessage('Remis')
        }
    }

    displayResult(argComputerMove, argPlayerMove);
    /* if(computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
            printMessage('Przegrywasz!');
        } else if (computerMove == 'papier' && playerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'papier' && playerMove == 'kamień'){
            printMessage('Przegrywasz!');
        } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'nożyce' && playerMove == 'papier'){
            printMessage('Przegrywasz!');
        }

        // nieprawidłowy ruch
        else if(playerMove == 'nieznany ruch'){
            printMessage('Nieopowiedni ruch, wpisz od 1-3')
        }
        // remis
        else {
            printMessage('Remis')
        }

    */
}
    document.getElementById('play-rock').addEventListener('click', function (){
        playGame('1');
    });
    document.getElementById('play-paper').addEventListener('click', function (){
        playGame('2');
    });
    document.getElementById('play-scissors').addEventListener('click', function (){
        playGame('3');
    });