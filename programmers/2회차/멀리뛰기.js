/** 멀리뛰기 */
const solution = (n) => {
  let answer = 0;

  let front = 1;
  let back = 2;

  if(n<3 && n>0) answer = n;
  else{
    for(let i=3; i<=n; i++){
      answer = (front + back) % 1234567;
      front = back;
      back = answer;
    }
  }
  
  return answer;
}