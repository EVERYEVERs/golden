document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작을 막습니다.

        // 실제로는 여기에서 이메일과 비밀번호를 확인하는 로직이 필요합니다.
        // 지금은 로그인에 성공했다고 가정하고 바로 게임 페이지로 이동합니다.
        window.location.href = 'game.html'; 
    });
});
