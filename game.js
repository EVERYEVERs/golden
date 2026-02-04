document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionAElement = document.getElementById('option-a');
    const optionBElement = document.getElementById('option-b');
    const nextBtn = document.getElementById('next-btn');

    let currentQuestionIndex = 0;
    let userChoice = null;

    const questions = [
        { question: "둘 중 하나만 평생 먹어야 한다면?", optionA: "평생 피자만 먹기", optionB: "평생 치킨만 먹기" },
        { question: "초능력을 가질 수 있다면?", optionA: "하늘을 나는 능력", optionB: "투명인간이 되는 능력" },
        { question: "시간 여행을 할 수 있다면?", optionA: "과거로 가서 실수 바로잡기", optionB: "미래로 가서 내 모습 확인하기" },
        { question: "딱 하루만 될 수 있다면?", optionA: "전 세계에서 가장 부자 되기", optionB: "모든 언어를 구사하는 사람 되기" }
    ];

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            optionAElement.querySelector('p').textContent = currentQuestion.optionA;
            optionBElement.querySelector('p').textContent = currentQuestion.optionB;

            // 선택 상태 초기화
            resetOptions();
        } else {
            // 게임 종료
            showEndScreen();
        }
    }

    function resetOptions() {
        optionAElement.classList.remove('selected', 'unselected');
        optionBElement.classList.remove('selected', 'unselected');
        nextBtn.disabled = true;
        userChoice = null;
    }

    function selectOption(choice) {
        userChoice = choice;
        if (choice === 'A') {
            optionAElement.classList.add('selected');
            optionBElement.classList.add('unselected');
        } else {
            optionBElement.classList.add('selected');
            optionAElement.classList.add('unselected');
        }
        nextBtn.disabled = false;
    }

    function showEndScreen() {
        const gameContainer = document.querySelector('.game-container');
        gameContainer.innerHTML = `
            <div class="question-container">
                <h2>게임 종료!</h2>
                <p style="font-size: 1.2em; color: #555;">참여해주셔서 감사합니다.</p>
            </div>
        `;
    }

    optionAElement.addEventListener('click', () => selectOption('A'));
    optionBElement.addEventListener('click', () => selectOption('B'));

    nextBtn.addEventListener('click', () => {
        if (userChoice) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });

    // 첫 번째 질문 로드
    loadQuestion();
});
