// Definição das perguntas e respostas corretas
const quizData = [
    {
        question: "Qual país sediou a Copa do Mundo de 2014?",
        a: "Brasil",
        b: "Alemanha",
        c: "Argentina",
        d: "França",
        correct: "a"
    },
    {
        question: "Quem é conhecido como Rei do Futebol?",
        a: "Zico",
        b: "Neymar",
        c: "Pelé",
        d: "Ronaldinho",
        correct: "c"
    },
    {
        question: "Em que time de futebol Neymar jogava antes de ir para o Barcelona?",
        a: "Santos",
        b: "Flamengo",
        c: "Vasco",
        d: "Botafogo",
        correct: "a"
    },
    {
        question: "Qual desses jogadores é famoso por suas cobranças de falta?",
        a: "Messi",
        b: "Cristiano Ronaldo",
        c: "Neymar",
        d: "Roberto Carlos",
        correct: "d"
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
