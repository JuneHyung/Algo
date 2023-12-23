/**
 * 연속 펄스 부분 수열의 합
 * 연속 부분 수열에 같은 길이의 펄스 수열을 각 원소끼리 곱하여 연속 펄스 부분 수열을 만들려함.
 * 펼스 수열은 1또는 -1로 시작하면서 1과 -1이 번갈아 나오는 수열.
 * 연속 펄스부분수열의 합 중 가장 큰것 리턴
 * 
 * 1. 배열의 범위길이를 1씩늘려가면서 모든경우 생각. 길이만큼 plus, minus 반복배열 만든 후 합구하기 => 시간초과
 * [2, 3, -6, 1, 3, -1, 2, 4] => 2 / 3/ -6 / 1 / 3/ -1 / 2 / 4 / 2, 3 / 2, 3, 6 / ...
 * 
 * 2. plus, minus배열 각각 순서대로 진행하며, 이전값과 현재값 합과 현재값을 비교해 큰 값 갱신.
 */
const solution = (sequence) => {
  const plus = [sequence[0]]  // plus로 시작 + - + - + -
  const minus = [-sequence[0]] // minus로 시작 - + - + - +

  const n = sequence.length;
  let answer = Math.max(sequence[0], -sequence[0])

  for(let i=1;i<n;i++){
    
    const plusPrev = plus[i-1];
    const minusPrev = minus[i-1];
    const cur = sequence[i];

    if(i%2!==0){ // 홀수 번째
      plus.push(Math.max(plusPrev - cur, -cur));
      minus.push(Math.max(minusPrev + cur, cur));    
    }else{ // 짝수 번째
      plus.push(Math.max(plusPrev + cur, cur));
      minus.push(Math.max(minusPrev - cur, -cur));    
    }
    answer = Math.max(answer, plus[i], minus[i]);
  }

  console.log(plus, minus)
  return answer;
}
const sequence = [2, 3, -6, 1, 3, -1, 2, 4]
// const sequence = [-5]
console.log(solution(sequence))