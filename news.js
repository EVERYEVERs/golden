document.addEventListener('DOMContentLoaded', () => {
    const newsGrid = document.getElementById('news-grid');

    // CORS 정책으로 인해 실제 데이터를 가져올 수 없으므로, 예시 데이터를 사용합니다.
    const sampleNews = [
        {
            title: "코스피, 외인·기관 매도에 2750선 하회…밸류업 기대감은 여전",
            summary: "코스피 지수가 외국인과 기관의 동반 매도세에 하락 마감했다. 다만 증권가에선 기업 밸류업 프로그램에 대한 기대감이 여전하다는 분석이 나온다.",
            source: "한국경제 | 2시간 전",
            thumbnail: "https://via.placeholder.com/400x225.png/8A2BE2/FFFFFF?text=뉴스+이미지+1"
        },
        {
            title: "뉴욕증시, FOMC 의사록 공개 앞두고 혼조세…엔비디아는 최고가 행진",
            summary: "뉴욕증시는 연방공개시장위원회(FOMC) 정례회의 의사록 공개를 앞두고 혼조세를 보였다. 인공지능(AI) 칩 선두 주자 엔비디아는 호실적 발표 후 주가가 역대 최고치를 경신했다.",
            source: "한국경제 | 5시간 전",
            thumbnail: "https://via.placeholder.com/400x225.png/8A2BE2/FFFFFF?text=뉴스+이미지+2"
        },
        {
            title: "환율, 다시 1360원대로…美 금리인하 기대 후퇴 영향",
            summary: "원·달러 환율이 다시 1360원대로 올라섰다. 미국의 강력한 경제 지표 발표로 연방준비제도(Fed)의 조기 금리 인하 기대감이 후퇴한 영향이다.",
            source: "한국경제 | 1일 전",
            thumbnail: "https://via.placeholder.com/400x225.png/8A2BE2/FFFFFF?text=뉴스+이미지+3"
        },
        {
            title: "정부, ‘초고령사회 대비’ 국민연금 개혁안 금주 발표…모수·구조개혁 동시 추진",
            summary: "정부가 이번 주 국민연금 종합운영계획을 발표한다. 보험료율과 소득대체율을 조정하는 모수개혁과 기초연금과의 관계를 재정립하는 구조개혁 방안이 함께 담길 전망이다.",
            source: "한국경제 | 3일 전",
            thumbnail: "https://via.placeholder.com/400x225.png/8A2BE2/FFFFFF?text=뉴스+이미지+4"
        },
        {
            title: "한은 총재 \"물가 안정 확신까지 금리인하 어려워…부동산 PF 연착륙 총력\"",
            summary: "이창용 한국은행 총재가 물가상승률이 목표 수준(2%)으로 수렴한다는 확신이 들기 전까지는 기준금리 인하를 논의하기 어렵다고 밝혔다.",
            source: "한국경제 | 5일 전",
            thumbnail: "https://via.placeholder.com/400x225.png/8A2BE2/FFFFFF?text=뉴스+이미지+5"
        },
        {
            title: "반도체 수출 회복세 뚜렷…4월 ICT 수출 33% 증가",
            summary: "반도체와 디스플레이 등 주력 품목의 수출이 회복세를 보이면서 4월 정보통신기술(ICT) 분야 수출액이 전년 동월 대비 33% 넘게 증가했다.",
            source: "한국경제 | 1주 전",
            thumbnail: "https://via.placeholder.com/400x225.png/8A2BE2/FFFFFF?text=뉴스+이미지+6"
        },
    ];

    function renderNews() {
        newsGrid.innerHTML = '';
        sampleNews.forEach(newsItem => {
            const card = document.createElement('a');
            card.href = '#'; // 실제 기사 링크 대신 임시 링크 사용
            card.className = 'news-card';
            card.innerHTML = `
                <img src="${newsItem.thumbnail}" alt="뉴스 썸네일" class="thumbnail">
                <div class="content">
                    <h2>${newsItem.title}</h2>
                    <p>${newsItem.summary}</p>
                    <span class="source">${newsItem.source}</span>
                </div>
            `;
            newsGrid.appendChild(card);
        });
    }

    renderNews();
});
