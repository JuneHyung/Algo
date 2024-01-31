/**
 * 마법의 엘리베이터
 * 마법의 엘리베이터에는 -1, +1, -10, +10, -100, +100 등과 같이 절댓값이 10c (c ≥ 0 인 정수) 형태인 정수들이 적힌 버튼이 있다.
 * 버튼을 누르면 현재 층 수에 버튼에 적혀있는 값을 더한 층으로 이동한다.
 * 0보다 작으면 안움직임.
 * 
 * 현재층 storey가 주어졌을 떄 0층으로 가기위해 필요한 돌의 최소값을 구하시오.
 * 
 * 1. 문자열변환 후 10-현재자리수, 현재자리의 수 비교 
 * -> 전자가 answer이 되야하는 경우 다음 자리수가 올라가니까 +1추가로 진행해서 답도출
 * -> 1 3 12 실패 -> 95 85 
 */
const solution = (storey) => {
  let str = storey.toString().split('').reverse();
  
  let answer = 0;
  let alpha = 0;

  for(let i=0;i<str.length;i++){
    const cur = Number(str[i]) + alpha;
    alpha = 0;
    if(cur > 5){
      answer += 10 - cur;
      alpha = 1;
    }else if(cur===5 && i < str.length-1){
      const next = str[i+1];
      if(next >= 5) {
        answer += cur;
        alpha = 1;
      }else{
        answer += cur;
      }
    }else{
      answer += cur;
    }
  }

  if(alpha>0) answer += alpha;
  return answer;
}
const storey = 16;
// const storey = 2554;
// const storey = 85;
console.log(solution(storey))
