/**
 * 4673 셀프 넘버
 * 양의 정수 n이 주어졌을 때, 이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), ...과 같은 무한 수열을 만들 수 있다.
 * 33 => 33 + 3 + 3 = 39, 39 => 39 + 3 + 9 = 51, ...
 * 원본 + 각 자리수 한개 합
 * 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력.
 */
const isSelfNumber = (n) =>{
  const arr = n.toString().split('').map(Number);
  result = n + arr.reduce((acc, cur)=>acc+cur, 0);
  return result;
}

const solution = () => {
  const selfNumbers = Array.from({length:10001}, ()=>true);
  for(let i=0;i<=10000;i++){
    selfNumbers[isSelfNumber(i)] = false;
  }
  const answer = [];
  selfNumbers.forEach((el,i)=>{if(el) answer.push(i)})
  return answer.join('\n')
}

console.log(solution())