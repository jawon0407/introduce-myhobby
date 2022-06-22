const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const matching = days.find((arr) => arr.includes("o"));

const number = [1, 2, 3, 4, 5, 6];

const multiplySelf = number.map((arr) => arr * 2);

const email = [
  "jawon0407@naver.com",
  "jawon0407@gmail.com",
  "jawon0407@hanmail.net",
  "jawon0407@daum.net",
];

const matchingEmail = email.filter((text) => text.includes("naver.com"));
