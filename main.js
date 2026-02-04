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
        { question: '다시 태어난다면?', choiceA: '돈 많은 백수', choiceB: '얼굴 천재', commentsA: [], commentsB: [] },
        { question: '둘 중 하나만 가능하다면?', choiceA: '평생 겨울', choiceB: '평생 여름', commentsA: [], commentsB: [] },
        { question: '받고 싶은 능력은?', choiceA: '순간이동', choiceB: '시간여행', commentsA: [], commentsB: [] },
        { question: '평생 공짜로 마신다면?', choiceA: '콜라', choiceB: '사이다', commentsA: [], commentsB: [] },
        { question: '100억 받고 돌아가기 vs 그냥 살기', choiceA: '50년 전으로 가기', choiceB: '현재에 만족하기', commentsA: [], commentsB: [] },
        { question: '미리 보고 싶은 미래는?', choiceA: '내 미래 배우자 얼굴', choiceB: '내 미래 연봉', commentsA: [], commentsB: [] },
        { question: '갖고 싶은 몸은?', choiceA: '절대 살 안 찌는 몸', choiceB: '절대 돈 안 떨어지는 통장', commentsA: [], commentsB: [] },
        { question: '초능력을 갖는다면?', choiceA: '모든 동물 말 알아듣기', choiceB: '모든 언어 통역 능력', commentsA: [], commentsB: [] },
        { question: '평생 한 가지만 먹는다면?', choiceA: '내가 가장 좋아하는 음식', choiceB: '세상 모든 음식 랜덤', commentsA: [], commentsB: [] },
        { question: '갖고 싶은 능력은?', choiceA: '투명인간', choiceB: '하늘을 나는 능력', commentsA: [], commentsB: [] },
        { question: '수면 스타일은?', choiceA: '내가 원하는 꿈만 꾸기', choiceB: '잠 안 자도 멀쩡한 몸', commentsA: [], commentsB: [] },
        { question: '하루 1시간 강제 행동', choiceA: '무조건 춤추기', choiceB: '무조건 노래 부르기', commentsA: [], commentsB: [] },
        { question: '목돈이 생긴다면?', choiceA: '내일 당장 10억 받기', choiceB: '10년 뒤 1000억 받기', commentsA: [], commentsB: [] },
        { question: '고백 스타일', choiceA: '좋아하면 무조건 고백하기', choiceB: '평생 고백 못하기', commentsA: [], commentsB: [] },
        { question: '한 달 동안 살아야 한다면?', choiceA: '인터넷 없이 살기', choiceB: '엘리베이터 없이 살기', commentsA: [], commentsB: [] },
        { question: '주어진다면?', choiceA: '1년 내내 완벽한 날씨', choiceB: '1년에 한 번 해외여행', commentsA: [], commentsB: [] },
        { question: '과거 vs 미래', choiceA: '과거의 나에게 메시지 보내기', choiceB: '미래의 나에게 메시지 받기', commentsA: [], commentsB: [] },
        { question: '경험하고 싶은 것은?', choiceA: '세상 모든 음식 맛보기', choiceB: '세상 모든 영화 보기', commentsA: [], commentsB: [] },
        { question: '갖고 싶은 손은?', choiceA: '손만 대면 뭐든지 고치는 능력', choiceB: '손만 대면 뭐든지 만드는 능력', commentsA: [], commentsB: [] },
        { question: '연인과...?', choiceA: '사랑하는 사람과 1년 살기', choiceB: '관심 없는 사람과 평생 살기', commentsA: [], commentsB: [] },
        { question: '둘 중 하나를 받는다면?', choiceA: '존경하는 인물과 하루 데이트', choiceB: '100만원 받기', commentsA: [], commentsB: [] },
        { question: '벌칙 수행', choiceA: '스마트폰 기록 모두 공개', choiceB: '팬티만 입고 길거리에서 춤추기', commentsA: [], commentsB: [] },
        { question: '평생 유지되는 것은?', choiceA: '양치 안 해도 상쾌한 입', choiceB: '머리 안 감아도 뽀송한 머리', commentsA: [], commentsB: [] },
        { question: '바꿀 수 있는 것은?', choiceA: '미래를 바꾸는 힘', choiceB: '과거를 바꾸는 힘', commentsA: [], commentsB: [] },
        { question: '알고 싶은 나의 정보', choiceA: '내가 죽는 날짜', choiceB: '내가 어떻게 죽는지', commentsA: [], commentsB: [] },
        { question: '평생 살아야 한다면?', choiceA: '5살 지능으로 살기', choiceB: '5살 외모로 살기', commentsA: [], commentsB: [] },
        { question: '사귄다면?', choiceA: '내 절친의 전 애인', choiceB: '내 전 애인의 절친', commentsA: [], commentsB: [] },
        { question: '받는다면?', choiceA: '1억 복권 당첨', choiceB: '전교 1등 하기', commentsA: [], commentsB: [] },
        { question: '매일 반복해야 한다면?', choiceA: '매일 똑같은 옷 입기', choiceB: '매일 똑같은 음식 먹기', commentsA: [], commentsB: [] },
        { question: '갖고 싶은 능력은?', choiceA: '모든 시험 100점', choiceB: '모든 게임에서 승리', commentsA: [], commentsB: [] },
        { question: '주어진다면?', choiceA: '1분 과거로 가기', choiceB: '1분 미래로 가기', commentsA: [], commentsB: [] },
        { question: '나의 의지와 상관없이...', choiceA: '내 생각이 목소리로 다 나옴', choiceB: '내 감정이 얼굴에 다 드러남', commentsA: [], commentsB: [] },
        { question: '요리 비법을 안다면?', choiceA: '세상에서 가장 맛있는 라면 끓이기', choiceB: '세상에서 가장 맛있는 김치찌개 끓이기', commentsA: [], commentsB: [] }
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
