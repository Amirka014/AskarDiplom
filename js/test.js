let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const container = document.getElementById('test-container');
    if (currentQuestion >= selectedQuestions.length) {
        localStorage.setItem('score', score);
        window.location.href = 'result.html';
        return;
    }

    const q = selectedQuestions[currentQuestion];
    container.innerHTML = `
        <h2>${q.question}</h2>
        ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join('')}
    `;
}

function checkAnswer(selected) {
    if (selected === selectedQuestions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    showQuestion();
}

// --- Инициализация теста ---
function initTest() {
    const count = parseInt(localStorage.getItem('questionCount')) || 10;
    selectedQuestions = shuffleArray(questions).slice(0, count);
    showQuestion();
}

initTest();
