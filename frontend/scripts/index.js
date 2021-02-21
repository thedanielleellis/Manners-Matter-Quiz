//Load form and Users
document.addEventListener("DOMContentLoaded", () => {
  createUserform();
  fetchUsers()
})

const BASE_URL = "http://127.0.0.1:3000"
const playButton = document.getElementById('play-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let currentUserID = undefined
let questionsList = []
let answersList = []
let currentUser = undefined
let hudUser = document.getElementById("hud-user")
let usersDiv = document.getElementById("users-info")
let usersForm = document.getElementById("users-form")
let quizContainer = document.getElementById("quiz-container")

//******read - fetch users, questions, answers index********* 
function fetchUsers() {
  fetch(`${BASE_URL}/users`)
    .then(res => res.json())
    .then(users => {
      for (let user of users) {
        let u = new User(user.id, user.username)
        u.renderUser();
      }
    })
}

function fetchQuestions() {
  fetch(`${BASE_URL}/questions`)
    .then(res => res.json())
    .then(questions => {
      for (let question of questions) {
        let q = new Question(question.content)
        q.addQuestion(questionsList);
      }
    })

}
fetchQuestions()

 function fetchAnswers() {
  fetch(`${BASE_URL}/answers`)
    .then(res => res.json())
    .then(answers => {
      for (let answer of answers) {
        let a = new Answer(answer.text, answer.correct)
        a.addAnswer(answersList);
      }
    })

}
fetchAnswers() 

//*******create - create a new user*********
// create a form and stop the default submit behavior with event listener
function createUserform() {

  usersForm.innerHTML +=
    `
  <form id="user-form">
  Enter A Username: <input type="text" id="username">
  <input type="submit" class="btn" value="Create User">
  </form>
  `
  usersForm.addEventListener("submit", userSubmittion)
}

// submit user and grab values from user form
function userSubmittion() {
  event.preventDefault();
  let username = document.getElementById("username").value
  let user = {
    username: username,
  }

  // fetch post request to create user
  fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(user => {
      let u = new User(user.id, user.username)
      u.renderUser()
      currentUserID = u.id
      hudUser.innerText = u.username
      alert("Username Successfully Saved!")
      playButton.classList.remove("hide")
    })
  document.getElementById("user-form").reset()
}

//******delete - delete a user*******
function deleteUser() {
  let userID = parseInt(event.target.dataset.id)
  fetch(`${BASE_URL}/users/${userID}`, {
    method: 'DELETE'
  })
  event.target.previousElementSibling.remove()
  event.target.remove()
  alert("Username Successfully Deleted!")
  hudUser.innerText = "Create A User"
}


playButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  header.classList.add('hide')
  playButton.classList.add('hide')
  questionsAnswers(questionsList, answersList)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(questionsList[currentQuestionIndex])
}

function showQuestion(questionsList) {
  resetState()
  questionElement.innerText = questionsList.content
  questionsList.answers.forEach(answer => {
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
  if (questionsList.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    user = {
      id: currentUserID,
      username: hudUser.innerText
    }
    fetch(`${BASE_URL}/users/${currentUserID}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    playButton.innerText = 'Restart'
    playButton.classList.remove('hide')
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


//Collect all questions & Answers in an Array
function questionsAnswers(questionsList, answersList) {

  questionsList[0]["answers"] = answersList.slice(0, 4)
  questionsList[1]["answers"] = answersList.slice(4, 8)
  questionsList[2]["answers"] = answersList.slice(8, 12)
  questionsList[3]["answers"] = answersList.slice(12, 16)
  questionsList[4]["answers"] = answersList.slice(16, 20)
}