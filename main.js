document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const choiceA = document.getElementById('choice-a');
    const choiceB = document.getElementById('choice-b');
    const choiceAText = choiceA.querySelector('.choice-text');
    const choiceBText = choiceB.querySelector('.choice-text');
    const resultAPercent = choiceA.querySelector('.result-percent');
    const resultBPercent = choiceB.querySelector('.result-percent');
    const nextButton = document.getElementById('next-button');

    const commentsSection = document.getElementById('comments-section');
    const commentTitle = document.getElementById('comment-title');
    const commentForm = document.getElementById('comment-form');
    const commentAuthorInput = document.getElementById('comment-author');
    const commentTextInput = document.getElementById('comment-text');
    const commentsList = document.getElementById('comments-list');

    let currentQuestionIndex = 0;
    let currentChoice = null; // 'A' 또는 'B'를 저장
    let questions = [
        {
            question: '다시 태어난다면?',
            choiceA: '돈 많은 백수', 
            choiceB: '얼굴 천재',
            commentsA: [],
            commentsB: []
        },
        {
            question: '둘 중 하나만 가능하다면?',
            choiceA: '평생 겨울', 
            choiceB: '평생 여름',
            commentsA: [],
            commentsB: []
        },
        {
            question: '받고 싶은 능력은?',
            choiceA: '순간이동', 
            choiceB: '시간여행',
            commentsA: [],
            commentsB: []
        }
    ];

    function loadQuestion(index) {
        const question = questions[index];
        questionText.textContent = question.question;
        choiceAText.textContent = question.choiceA;
        choiceBText.textContent = question.choiceB;
        currentChoice = null;

        resetChoices();
        commentsSection.classList.add('hidden');
    }

    function resetChoices() {
        choiceA.classList.remove('selected');
        choiceB.classList.remove('selected');
        choiceA.style.pointerEvents = 'auto';
        choiceB.style.pointerEvents = 'auto';
        resultAPercent.style.display = 'none';
        resultBPercent.style.display = 'none';
        nextButton.classList.add('hidden');
    }

    function handleChoice(selectedChoice) {
        currentChoice = selectedChoice;
        
        const percentA = Math.floor(Math.random() * 101);
        const percentB = 100 - percentA;

        resultAPercent.textContent = `${percentA}%`;
        resultBPercent.textContent = `${percentB}%`;

        resultAPercent.style.display = 'block';
        resultBPercent.style.display = 'block';

        if (selectedChoice === 'A') {
            choiceA.classList.add('selected');
        } else {
            choiceB.classList.add('selected');
        }

        choiceA.style.pointerEvents = 'none';
        choiceB.style.pointerEvents = 'none';
        nextButton.classList.remove('hidden');
        
        showCommentsForChoice(selectedChoice);
    }

    function showCommentsForChoice(choice) {
        const question = questions[currentQuestionIndex];
        const choiceText = choice === 'A' ? question.choiceA : question.choiceB;
        
        commentTitle.innerHTML = `'${choiceText}' 선택! <span class="choice-badge">의견 나누기</span>`;
        commentsSection.classList.remove('hidden');
        loadComments();
    }

    function loadComments() {
        commentsList.innerHTML = '';
        if (!currentChoice) return;

        const questionComments = currentChoice === 'A' ? questions[currentQuestionIndex].commentsA : questions[currentQuestionIndex].commentsB;
        
        questionComments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `<p class="author">${comment.author} <span>(${comment.choiceText})</span></p><p>${comment.text}</p>`;
            commentsList.appendChild(commentElement);
        });
    }

    function handleCommentSubmit(event) {
        event.preventDefault();
        const author = commentAuthorInput.value.trim();
        const text = commentTextInput.value.trim();
        const question = questions[currentQuestionIndex];
        const choiceText = currentChoice === 'A' ? question.choiceA : question.choiceB;

        if (author && text && currentChoice) {
            const commentArray = currentChoice === 'A' ? questions[currentQuestionIndex].commentsA : questions[currentQuestionIndex].commentsB;
            commentArray.push({ author, text, choiceText: choiceText }); // 선택한 텍스트도 함께 저장
            loadComments();
            commentForm.reset();
        }
    }

    choiceA.addEventListener('click', () => handleChoice('A'));
    choiceB.addEventListener('click', () => handleChoice('B'));

    nextButton.addEventListener('click', () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion(currentQuestionIndex);
    });

    commentForm.addEventListener('submit', handleCommentSubmit);

    // 초기 질문 로드
    loadQuestion(currentQuestionIndex);
});
