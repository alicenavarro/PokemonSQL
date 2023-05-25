var pokeballElement = document.querySelector(".pokeball");
var questionContainerElement = document.querySelector(".question-container");
var isOpened = false;

function openPokeball() {
  if (!isOpened) {
    pokeballElement.classList.add("opened");
    setTimeout(function() {
      questionContainerElement.style.display = "block";
      setTimeout(function() {
        questionContainerElement.style.opacity = "1";
      }, 100);
    }, 1000);
    isOpened = true;
  }
}

pokeballElement.addEventListener("click", openPokeball);

var questions = [
  {
    question: "¿Cuál es la tabla que almacena información sobre los estudiantes en Hogwarts?",
    options: ["Estudiantes", "Alumnos", "Magos", "Hogwarts_Estudiantes"],
    answer: 3
  },
  {
    question: "¿Qué consulta SQL se utilizaría para obtener todos los estudiantes de la casa de Gryffindor?",
    options: [
      "SELECT * FROM Estudiantes WHERE casa = 'Gryffindor'",
      "SELECT * FROM Estudiantes WHERE casa = 'Hufflepuff'",
      "SELECT * FROM Estudiantes WHERE casa = 'Ravenclaw'",
      "SELECT * FROM Estudiantes WHERE casa = 'Slytherin'"
    ],
    answer: 0
  },
  // Agrega más preguntas y respuestas aquí
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var resultElement = document.getElementById("result");
var submitButton = document.getElementById("submit-button");

function loadQuestion() {
  var question = questions[currentQuestion];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = "";

  for (var i = 0; i < question.options.length; i++) {
    var option = document.createElement("button");
    option.textContent = question.options[i];
    option.setAttribute("data-index", i);
    option.addEventListener("click", selectAnswer);
    optionsElement.appendChild(option);
  }
}

function selectAnswer(event) {
  var selectedOption = event.target;
  var selectedAnswer = parseInt(selectedOption.getAttribute("data-index"));

  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
    resultElement.textContent = "¡Correcto!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent =
      "Incorrecto. La respuesta correcta es: " +
      questions[currentQuestion].options[questions[currentQuestion].answer];
    resultElement.style.color = "red";
  }

  for (var i = 0; i < optionsElement.children.length; i++) {
    optionsElement.children[i].disabled = true;
  }

  if (currentQuestion === questions.length - 1) {
    submitButton.textContent = "Ver Puntuación";
    submitButton.addEventListener("click", showScore);
  } else {
    submitButton.textContent = "Siguiente Pregunta";
    submitButton.removeEventListener("click", selectAnswer);
    submitButton.addEventListener("click", nextQuestion);
  }
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
  resultElement.textContent = "";
  submitButton.textContent = "Responder";

  for (var i = 0; i < optionsElement.children.length; i++) {
    optionsElement.children[i].disabled = false;
  }
}
function showScore() {
    var percentage = (score / questions.length) * 100;
    var message = "Tu puntuación final es: " + percentage.toFixed(2) + "%";
    resultElement.textContent = message;
    submitButton.style.display = "none";
  }
  
  loadQuestion();
