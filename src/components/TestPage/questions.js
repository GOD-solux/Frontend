import questionImage1 from "../../assets/question1.png";
// import questionImage2 from "../../assets/question2.png";


export const questions = {
  1: "Q. 사색보단 산책이 좋다.",
  2: "Q. 활동적인 문화생활을 즐긴다.",
  3: "Q. 역사와 문화에 관심이 많다.",
  4: "Q. 날짜나 날씨에 크게 상관없는 활동을 선호한다.",
  5: "Q. 새로운 경험을 쌓는 걸 좋아한다.",
  6: "Q. 다른 사람이 하는 걸 보면 나도 따라 해보고 싶다.",
  7: "Q. 한 가지 주제에 깊이 있게 생각하는 걸 좋아한다.",
  8: "Q. 전시회에서 사진 찍는 것을 좋아한다.",
  9: "Q. 쉽게 피곤해지지 않는다.",
};


// export const questionMapping = {
//   1: [2,4],
//   2: [3,5],
//   3: [6,5],
//   4: [7,5],
//   5: [8,6],
//   6: [9,8],
//   7: ['A',8],
//   8: ['B', 9 ], 
//   9: ['C','B' ]
// };

export const questionMapping = {
  1: {yes:2,no:4},
  2: { yes: 3, no: 5 },
  3: { 'yes': 6, 'no': 5 },
  4: { 'yes': 7, 'no': 5 },
  5: { 'yes': 8, 'no': 6 },
  6: { 'yes': 9, 'no': 8 },
  7: { 'yes': 'A', 'no': 8 },
  8: { 'yes': 'B', 'no': 9 }, // 순환 예시
  9: { 'yes': 'C', 'no': 'B' }// 순환 예시
};

export const imgs={
  1:questionImage1,
  // 2:questionImage2,
  // 3:questionImage3,
  // 4:questionImage4,
  // 5:questionImage5,
  // 6:questionImage6,
  // 7:questionImage7,
  // 8:questionImage8,
  // 9:questionImage9
};


