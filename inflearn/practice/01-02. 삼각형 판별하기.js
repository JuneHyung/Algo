// 삼각형이 만들어지려면 제일 큰 변의 길이가 나머지 두 변의 길이의 합보다 작아야한다.

const solution = (a,b,c) =>{
  const arr= [a,b,c];
  const max = Math.max(a,b,c);

  arr.splice(arr.indexOf(max),1);
  
  const sum = arr.reduce((acc,cur)=>acc+cur);  

  const answer = max < sum ? "YES" : "NO";
  return answer;
}

// 6, 7, 11 - YES
// 13, 33, 17 - NO
console.log(solution(13,33,17))