/**
 * 가장 큰 수
 * 0또는 양의 정수가 주어졌을 때 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내자.
 * 
 * numbers길이는 1~100,000
 * numbers원소는 0~1,000
 * 정답은 문자열로 return
 */
const solution = (numbers) => {
  const converted = numbers.map(el=>el.toString());
  const sorted = converted.sort((a,b)=>(b+a)-(a+b));
  const answer = sorted.filter(el=>el==='0').length===sorted.length ? '0' : sorted.join('');
  return answer;
}
// const numbers=[3, 30, 34, 5, 9];
// const numbers=[232,23] ; // 23232
// const numbers=[212,21] ; // 21221
// const numbers=[70,0,0,0,0] ; // 70000
const numbers=[0,0,0,0] ; // 0
console.log(solution(numbers))