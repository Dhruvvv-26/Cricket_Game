// let userScore = 0;
//         let computerScore = 0;
//         const resultDiv = document.getElementById('result');
//         const userScoreSpan = document.getElementById('userScore');
//         const computerScoreSpan = document.getElementById('computerScore');

//         function generateComputerChoice() {
//             const choices = ['Bat', 'Ball', 'Stump'];
//             const randomIndex = Math.floor(Math.random() * 3);
//             return choices[randomIndex];
//         }

//         function determineWinner(userChoice, computerChoice) {
//             if (userChoice === computerChoice) {
//                 return "It's a Tie! 🤝";
//             }

//             // Game rules:
//             // Bat beats Ball
//             // Ball beats Stump
//             // Stump beats Bat
            
//             if (
//                 (userChoice === 'Bat' && computerChoice === 'Ball') ||
//                 (userChoice === 'Ball' && computerChoice === 'Stump') ||
//                 (userChoice === 'Stump' && computerChoice === 'Bat')
//             ) {
//                 userScore++;
//                 return 'You Won! 🎉';
//             } else {
//                 computerScore++;
//                 return 'Computer Won! 🤖';
//             }
//         }

//         function getEmoji(choice) {
//             switch(choice) {
//                 case 'Bat': return '🏏';
//                 case 'Ball': return '⚾';
//                 case 'Stump': return '\|/';
//                 default: return '';
//             }
//         }

//         function playGame(userChoice) {
//             const computerChoice = generateComputerChoice();
//             const result = determineWinner(userChoice, computerChoice);
            
//             resultDiv.innerHTML = `
//                 You chose ${userChoice} ${getEmoji(userChoice)}<br>
//                 Computer chose ${computerChoice} ${getEmoji(computerChoice)}<br>
//                 <strong>${result}</strong>
//             `;

//             userScoreSpan.textContent = userScore;
//             computerScoreSpan.textContent = computerScore;
//         }


let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
const resultDiv = document.getElementById('result');
const userScoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('computerScore');

// Update initial scores on page load
userScoreSpan.textContent = userScore;
computerScoreSpan.textContent = computerScore;

function generateComputerChoice() {
    const choices = ['Bat', 'Ball', 'Stump'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a Tie! 🤝";
    }

    // Game rules:
    // Bat beats Ball
    // Ball beats Stump
    // Stump beats Bat
    
    if (
        (userChoice === 'Bat' && computerChoice === 'Ball') ||
        (userChoice === 'Ball' && computerChoice === 'Stump') ||
        (userChoice === 'Stump' && computerChoice === 'Bat')
    ) {
        userScore++;
        localStorage.setItem('userScore', userScore);
        return 'You Won! 🎉';
    } else {
        computerScore++;
        localStorage.setItem('computerScore', computerScore);
        return 'Computer Won! 🤖';
    }
}

function getEmoji(choice) {
    switch(choice) {
        case 'Bat': return '🏏';
        case 'Ball': return '⚾';
        case 'Stump': return '|/';
        default: return '';
    }
}

function playGame(userChoice) {
    const computerChoice = generateComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    resultDiv.innerHTML = `
        You chose ${userChoice} ${getEmoji(userChoice)}<br>
        Computer chose ${computerChoice} ${getEmoji(computerChoice)}<br>
        <strong>${result}</strong>
    `;

    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    localStorage.setItem('userScore', 0);
    localStorage.setItem('computerScore', 0);
    userScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    resultDiv.innerHTML = 'Game Reset! Start Playing! 🎮';
}