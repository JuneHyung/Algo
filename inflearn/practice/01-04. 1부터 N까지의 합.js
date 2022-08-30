const solution = (num) =>{
  let answer = 0;
  for(let i=1;i<=num;i++){
    answer +=i;
  }
  return answer;
}


// ▣ 입력예제 1 
// 6 
// ▣ 출력예제 1
// 21
// ▣ 입력예제 2 
// 10
// ▣ 출력예제 2
// 55
console.log(solution(10))