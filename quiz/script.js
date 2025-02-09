const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 3 },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 2 },
    { question: "What is the color of the sky?", options: ["Red", "Blue", "Green", "Yellow"], correct: 2 }
];
let current = 0;

function loadQuestion() {
    const { question, options } = questions[current];
    document.getElementById('question').innerText = question;
    document.querySelectorAll('.option').forEach((btn, index) => {
        btn.innerText = options[index];
        btn.onclick = () => checkAnswer(index + 1);
    });
    document.getElementById('result').innerText = "";
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selected) {
    const result = document.getElementById('result');
    result.innerText = selected === questions[current].correct ? "Correct!" : `Wrong! Correct answer: ${questions[current].options[questions[current].correct - 1]}`;
    result.style.color = selected === questions[current].correct ? "green" : "red";
    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    current++;
    if (current < questions.length) loadQuestion();
    else document.getElementById('question-container').innerHTML = "<h2>Quiz Completed!</h2><p>Thanks for participating.</p>";
}

loadQuestion();
