const fortuneCookies = [
    "안녕하세요 통계학과 이상화 입니다.",
    "예제 4번입니다.",
    "오늘은 21년 9월 7일 입니다.",
    "날씨는 흐림입니다.",
    "다음주는 맑을 예정입니다."
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies [idx]}