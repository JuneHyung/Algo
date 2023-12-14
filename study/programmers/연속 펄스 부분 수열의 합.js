/**
 * 연속 펄스 부분 수열의 합
 * 연속 부분 수열에 같은 길이의 펄스 수열을 각 원소끼리 곱하여 연속 펄스 부분 수열을 만들려함.
 * 펼스 수열은 1또는 -1로 시작하면서 1과 -1이 번갈아 나오는 수열.
 * 연속 펄스부분수열의 합 중 가장 큰것 리턴
 */
const solution = (sequence) => {
  const plus = [sequence[0]];
  const minus = [-sequence[0]];
    
  const len = sequence.length;
  let answer = Math.max(sequence[0], -sequence[0])
  
  for(let i=1; i<len; i++){
    const cur = sequence[i];
      
    if(i%2===0){
      plus.push(Math.max(plus[i-1] + cur, cur));
      minus.push(Math.max(minus[i-1] - cur, -cur));
    }else{
      plus.push(Math.max(plus[i-1] - cur, -cur));
      minus.push(Math.max(minus[i-1] + cur, cur));
    }
      
    answer = Math.max(answer , plus[i], minus[i])
  }
  
  // const answer = Math.max(...plus, ...minus)

  return answer;
}
// const sequence = [2, 3, -6, 1, 3, -1, 2, 4]
const sequence = [-5]
console.log(solution(sequence))