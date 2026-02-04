const mainCard = document.getElementById('main-card');
const resultCard = document.getElementById('result-card');
const nameInput = document.getElementById('name');
const resultName = document.getElementById('result-name');
const fortuneText = document.getElementById('fortune-text');

const fortunes = [
    "오늘은 새로운 인연을 만날 수 있는 좋은 날입니다. 긍정적인 마음을 유지하세요.",
    "재물운이 상승하는 날입니다. 뜻밖의 행운이 찾아올 수 있습니다.",
    "오늘은 잠시 쉬어가는 것이 좋습니다. 명상이나 가벼운 산책으로 마음의 안정을 찾으세요.",
    "도전적인 과제가 주어지지만, 당신의 능력으로 충분히 해결할 수 있습니다.",
    "주변 사람들의 도움으로 어려운 문제를 해결하게 될 것입니다. 감사의 마음을 표현하세요.",
    "예상치 못한 즐거운 소식이 당신을 기다리고 있습니다. 하루를 기대감으로 시작해보세요.",
    "오늘은 창의적인 아이디어가 샘솟는 날입니다. 메모하는 습관을 들여보세요."
];

function getFortune() {
    const name = nameInput.value.trim();
    if (!name) {
        alert("이름을 입력해주세요.");
        return;
    }

    // 랜덤 운세 선택
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    // 결과 카드에 내용 채우기
    resultName.textContent = `${name}님의 오늘의 운세`;
    fortuneText.textContent = selectedFortune;

    // 카드 보이기/숨기기
    mainCard.style.opacity = '0';
    mainCard.style.transform = 'scale(0.9)';
    mainCard.style.pointerEvents = 'none';

    resultCard.style.display = 'block';
    setTimeout(() => {
        resultCard.classList.add('show');
    }, 10); // display 속성 변경 후 약간의 딜레이를 주어 transition이 작동하도록 함

}

function closeResult() {
    resultCard.classList.remove('show');
    
    setTimeout(() => {
        mainCard.style.opacity = '1';
        mainCard.style.transform = 'scale(1)';
        mainCard.style.pointerEvents = 'auto';
        resultCard.style.display = 'none';
        nameInput.value = ''; // 입력 필드 초기화
    }, 500); // transition 시간과 일치시킴
}
