let record, metallica, fleetwood, ledzeppelin, currentSound;

function preload() {
  soundFormats('mp3', 'ogg');
  metallica = loadSound('audio/metallica.mp3');
  fleetwood = loadSound('audio/fleetwoodmac.mp3');
  ledzeppelin = loadSound('audio/ledzeppelin.mp3');
}

function setup() {
  record = createImg("images/recordplayer.png");
  record.position(50,200);
  record.size(350,350);
}

function draw() {
  background(0);
  record.mousePressed(playNextSound);
}

function playNextSound() {
  if (currentSound) {
    currentSound.stop();
  }

  if (currentSound === metallica) {
    currentSound = fleetwood;
  } else if (currentSound === fleetwood) {
    currentSound = ledzeppelin;
  } else {
    currentSound = metallica;
  }

  currentSound.play();
}

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What country is ACDC from?',
    answers: [
      { text: 'Australia', correct: true },
      { text: 'England', correct: false },
      { text: 'The United States', correct: false }
    ]
  },
  {
    question: 'What group recorded the hit song "Black Dog"?',
    answers: [
      { text: 'The Eagles', correct: false },
      { text: 'ACDC', correct: false },
      { text: 'Led Zeppelin', correct: true }
    ]
  },
  {
    question: 'Who was a former lead guitarist for Guns N Roses?',
    answers: [
      { text: 'Slash', correct: true },
      { text: 'The Edge', correct: false },
      { text: 'Flea', correct: false }
    ]
  },
  {
    question: 'Who sang the song “Dancing with Myself”?',
    answers: [
      { text: 'Michael Jackson', correct: false },
      { text: 'Wham!', correct: false },
      { text: 'Billy Idol', correct: true }
    ]
  },
  {
    question: 'Who was kicked out of The Beatles before they achieved worldwide fame?',
    answers: [
      { text: 'Ringo Starr', correct: false },
      { text: 'John Lennon', correct: false },
      { text: 'Pete Best', correct: true }
    ]
  },
  {
    question: 'How many instruments could Prince play?',
    answers: [
      { text: '27', correct: true },
      { text: '15', correct: false },
      { text: '36', correct: false }
    ]
  },
  {
    question: 'Who wrote the Aretha Franklins song "Respect"?',
    answers: [
      { text: 'Elvis', correct: false },
      { text: 'Odis Redding', correct: true },
      { text: 'Sam Cooke', correct: false }
    ]
  },
  {
    question: 'What group has an infamous, bitter relationship between them?',
    answers: [
      { text: 'Hall & Oates', correct: true },
      { text: 'Jackson 5', correct: false },
      { text: 'Earth, Wind, & Fire', correct: false }
    ]
  }
]


