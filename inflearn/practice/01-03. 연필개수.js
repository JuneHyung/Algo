const solution = (student) => {
  const answer = Math.ceil(student/12)
  return answer;
}

// ▣ 입력예제 1 
// 25
// ▣ 출력예제 1
// 3
// ▣ 입력예제 2 
// 178
// ▣ 출력예제 2
// 15

console.log(solution(178))