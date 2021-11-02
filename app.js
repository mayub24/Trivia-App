// Array of Objects which will be the question and the answers
const quiz =
    [
        {
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            correctAnswer: ""
        },
        {
            question: "How old is Steph Curry?",
            option1: "31",
            option2: "32",
            option3: "33",
            option4: "29",
            correctAnswer: "33"
        },
        {
            question: 'What is "cynophobia"?',
            option1: "Fear of dogs",
            option2: "Fear of cats",
            option3: "Fear of crocodiles",
            option4: "Fear of elephants",
            correctAnswer: "Fear of dogs"
        },
        {
            question: "What is the name of the biggest technology company in South Korea?",
            option1: "Samsung",
            option2: "Apple",
            option3: "Nokia",
            option4: "BlackBerry",
            correctAnswer: "Samsung"
        },
        {
            question: "The first dictionary was written by?",
            option1: "Lebron James",
            option2: "Kobe Bryant",
            option3: "Robert Cawdrey",
            option4: "Bob Myers",
            correctAnswer: "Robert Cawdrey"
        },
        {
            question: "What was the first soft drink in space?",
            option1: "Sprite",
            option2: "Coca Cola",
            option3: "Pepsi",
            option4: "Fanta",
            correctAnswer: "Coca Cola"
        },
        {
            question: "What sport is dubbed the 'king of sports'?",
            option1: "Basketball",
            option2: "Golf",
            option3: "Tennis",
            option4: "Soccer",
            correctAnswer: "Soccer"
        },
        {
            question: "What is the name of the professional ice hockey team based in Toronto, Canada?",
            option1: "Toronto Maple Leafs",
            option2: "Toronto Raptors",
            option3: "Toronto Blue Jays",
            option4: "Toronto Gizzlies",
            correctAnswer: "Toronto Maple Leafs"
        },
        {
            question: "What color is a ruby?",
            option1: "Red",
            option2: "Green",
            option3: "Blue",
            option4: "Yellow",
            correctAnswer: "Red"
        },
        {
            question: "How many colors are there in the rainbow?",
            option1: "7",
            option2: "5",
            option3: "3",
            option4: "8",
            correctAnswer: "7"
        },
        {
            question: "How old is Michael Jordan?",
            option1: "38",
            option2: "50",
            option3: "53",
            option4: "58",
            correctAnswer: "58"
        },
        {
            question: "What country has the most natural lakes?",
            option1: "US",
            option2: "China",
            option3: "Canada",
            option4: "Pakistan",
            correctAnswer: "Canada"
        },
        {
            question: "How many hearts does an octopus have?",
            option1: "3",
            option2: "5",
            option3: "8",
            option4: "2",
            correctAnswer: "3"
        },
        {
            question: "How many legs does a spider have?",
            option1: "12",
            option2: "8",
            option3: "4",
            option4: "16",
            correctAnswer: "8"
        },
        {
            question: "How long do elephant pregnancies last?",
            option1: "11 Months",
            option2: "22 Months",
            option3: "17 Months",
            option4: "6 Months",
            correctAnswer: "22 Months"
        }
    ]


// Selectors
const question = document.querySelector('.question');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btnz = document.querySelectorAll('#btn');
let randomNumber;
const body = document.querySelector('body');
const card = document.querySelector('.card');
let counter = 0;
const header = document.querySelector('header h1');
let numberOfQuestions = 12;

// Next Question and Play again Buttons
const nextQuestion = document.querySelector('.next-qsn');
const playAgain = document.querySelector('.play-again');

// Getting X's and then adding them based on counter #
const oneX = document.querySelector('.one');
const twoX = document.querySelector('.two');
const threeX = document.querySelector('.three');



// Events
btnz.forEach((eachBtn) => {
    eachBtn.addEventListener('click', guessAnswer);
})


// Next Question Functionality
nextQuestion.addEventListener('click', (e) => {
    populateValues();
})



// Play Again Functionality
playAgain.addEventListener('click', (e) => {
    let sure = confirm(`Do you want to play again?`);
    if (sure) {
        startGame();
    }
    else {
        alert('Thanks for playing!');
    }
})



// Functions
// Populate question and options as soon as page loads
function startGame() {
    populateValues();
    // Make Buttons Disabled
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    nextQuestion.disabled = false;

    // Styling Buttons
    btn1.style.opacity = 1;
    btn2.style.opacity = 1;
    btn3.style.opacity = 1;
    btn4.style.opacity = 1;
    nextQuestion.style.opacity = 1;

    // Reset styling
    // body.style.backgroundColor = 'skyblue';
    card.style.backgroundColor = 'rgb(98, 211, 255)';
    header.style.color = 'white';
    body.style.backgroundImage = 'linear-gradient(270deg, rgb(102, 250, 250), rgb(10, 112, 152))';
    body.style.backgroundColor = 'none';

    // Reseting counter
    counter = 0;

    // Removing X Buttons
    oneX.style.visibility = 'hidden';
    twoX.style.visibility = 'hidden';
    threeX.style.visibility = 'hidden';

}

function populateValues() {
    randomNumber = Math.floor((Math.random() * numberOfQuestions) + 1);
    console.log(randomNumber);
    question.innerText = quiz[randomNumber].question;
    btn1.innerText = quiz[randomNumber].option1;
    btn2.innerText = quiz[randomNumber].option2;
    btn3.innerText = quiz[randomNumber].option3;
    btn4.innerText = quiz[randomNumber].option4;

    // Play again should be disabled initially
    playAgain.style.opacity = 0.5;
    playAgain.disabled = true;
}

function guessAnswer(e) {
    console.log(e.target.innerText);
    checkAnswer(e.target.innerText);
}


function checkAnswer(value) {
    if (value === quiz[randomNumber].correctAnswer) {
        // remove object from array
        // decrease number of questions
        quiz.splice(randomNumber, 1);
        numberOfQuestions--;

        // Before the alert change styling
        populateValues();
        alert('Correct Answer!');
        counter = 0;
        checkCounter();
    }
    else {
        counter++;
        console.log(counter);
        checkCounter();
        alert('Wrong Answer! Try again!');
    }

    // If user guessing same question wrong 3 times, end game
    if (counter == 3) {
        endGame();
    }
}

function endGame() {
    // Styling when the game ends
    body.style.backgroundImage = 'none';
    body.style.backgroundColor = 'red';
    card.style.backgroundColor = 'pink';
    header.style.color = 'black';

    // Make Buttons Disabled
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    nextQuestion.disabled = true;


    // Styling Buttons
    btn1.style.opacity = 0.5;
    btn2.style.opacity = 0.5;
    btn3.style.opacity = 0.5;
    btn4.style.opacity = 0.5;
    nextQuestion.style.opacity = 0.5;

    // Play again button gets enabled
    playAgain.disabled = false;
    playAgain.style.opacity = 1;
}


function checkCounter() {

    if (counter == 0) {
        oneX.style.visibility = 'hidden';
        twoX.style.visibility = 'hidden';
        threeX.style.visibility = 'hidden';
    }
    else if (counter == 1) {
        oneX.style.visibility = 'visible';
    }
    else if (counter == 2) {
        twoX.style.visibility = 'visible';
    }
    else {
        threeX.style.visibility = 'visible';
    }
}


populateValues();