// Definição das perguntas e respostas corretas
const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        a: "Brasília",
        b: "Rio de Janeiro",
        c: "São Paulo",
        d: "Salvador",
        correct: "a"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        a: "Terra",
        b: "Júpiter",
        c: "Marte",
        d: "Saturno",
        correct: "b"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        a: "Machado de Assis",
        b: "Jorge Amado",
        c: "Clarice Lispector",
        d: "Guimarães Rosa",
        correct: "a"
    },
    {
        question: "Qual é a fórmula da água?",
        a: "H2O",
        b: "CO2",
        c: "O2",
        d: "NaCl",
        correct: "a"
    },
];

// Seleciona elementos do DOM
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

// Função para carregar o quiz
function loadQuiz() {
    quizData.forEach((data, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${data.question}</p>
            <label><input type="radio" name="question${index}" value="a"> ${data.a}</label>
            <label><input type="radio" name="question${index}" value="b"> ${data.b}</label>
            <label><input type="radio" name="question${index}" value="c"> ${data.c}</label>
            <label><input type="radio" name="question${index}" value="d"> ${data.d}</label>
        `;
        quizContainer.appendChild(questionElement);
    });
}

// Função para calcular a pontuação
function calculateScore() {
    let score = 0;

    quizData.forEach((data, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const questionElement = document.querySelector(`.question:nth-child(${index + 1})`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;

            // Verifica resposta correta
            if (userAnswer === data.correct) {
                score++;
                questionElement.classList.add('correct');
            } else {
                questionElement.classList.add('incorrect');
            }
        }
    });

    return score;
}

// Evento de clique para enviar respostas
submitButton.addEventListener('click', () => {
    const score = calculateScore();
    resultContainer.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
});

// Carrega o quiz ao iniciar
loadQuiz();
