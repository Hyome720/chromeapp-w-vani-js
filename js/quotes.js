const quotes = [
  {
    quote: "돈 꾸면서도 살 건 사는데 꿈꾸면서 사는 건 아까운지",
    author: "Rich, 에픽하이",
  },
  {
    quote: "이해를 두 번 해도 일만 나면 오해",
    author: "또 싸워, 에픽하이",
  },
  {
    quote: "88년도 8월 18일생 딱봐도 뭘 가져도 너보다 많은 팔자",
    author: "늴리리야, GD",
  },
  {
    quote: "랩 스킬보다 연습해야 할건 현피 워",
    author: "신기루, 씨잼",
  },
  {
    quote: "난 연봉을 여의봉이라고 발음해 마음만 먹으면 쭉 늘어나기에",
    author: "지코",
  },
  {
    quote: "내 신상털어 욕해 내 본명은 서명원, 이거 끝나면 YG 계약해지서에 서명 ONE",
    author: "서출구",
  },
  {
    quote: "친구들이 그랬지 넌 속에 화가 많아 그래 맞아 그래서 난 더 큰 그림을 그려나가",
    author: "서출구",
  },
  {
    quote: "구두계약 남자는 굽 힐 필요없지",
    author: "올티",
  },
  {
    quote: "365일 고인 땀은 널 위해서 알잖아 내가 어찌 하루를 버리겠어",
    author: "신발장, 에픽하이",
  },
  {
    quote: "창살에 가둘 수 없는 flow, 내가 제일 잘 나가",
    author: "타블로",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;