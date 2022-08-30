const solution = (day, arr) => {
  const answer = arr.filter(el=>el%10===day).length;
  return answer;
}

// ▣ 입력예제 1 
// 3
// 25 23 11 47 53 17 33
// ▣ 출력예제 1
// 3
// ▣ 입력예제 2 
// 0
// 12 20 54 30 87 91 30
// ▣ 출력예제 2
// 3

// const arr=[25, 23, 11, 47, 53, 17, 33];
const arr=[12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));