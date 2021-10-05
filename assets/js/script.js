let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;

let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    console.log('start')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.floor() * 4);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);


}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

    }
}

function selectAnswer(e){
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

let questions = [
    {
        question: 'what is 2 + 2?',
        answers: [
            { text: '4', correct:true},
            { text: '44', correct:false}, 
            { text: '16', correct:false},
            { text: '3', correct:false},           

        ]
    },
    {
        question: 'what is 1 + 1?',
        answers: [
            { text: '4', correct:false},
            { text: '44', correct:false}, 
            { text: '2', correct:true},
            { text: '3', correct:false},           

        ]
    },
    {
        question: 'what is 5 + 5?',
        answers: [
            { text: '4', correct:false},
            { text: '10', correct:true}, 
            { text: '16', correct:false},
            { text: '3', correct:false},           

        ]
    },
    {
        question: 'what is 4 + 0?',
        answers: [
            { text: '4', correct:true},
            { text: '44', correct:false}, 
            { text: '16', correct:false},
            { text: '3', correct:false},           

        ]
    },
    {
        question: 'what is 2 + 1?',
        answers: [
            { text: '4', correct:false},
            { text: '44', correct:false}, 
            { text: '16', correct:false},
            { text: '3', correct:true},           

        ]
    },
    {
        question: 'what is 12 + 4?',
        answers: [
            { text: '4', correct:false},
            { text: '44', correct:false}, 
            { text: '16', correct:true},
            { text: '3', correct:false},           

        ]
    },
    {
        question: 'what is 22 + 22?',
        answers: [
            { text: '4', correct:false},
            { text: '44', correct:true}, 
            { text: '16', correct:false},
            { text: '3', correct:false},           

        ]
    },
]