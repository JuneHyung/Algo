/**
 * 2477 참외밭
 * 1m2에 자라는 참외개수를 세어 참외밭 넓이를 구해 참외ㅡ이 총 개수를 구하려 한다.
 * 참외밭은 ㄱ자모양을 0 90 180 270 돌린 형태들 중 하나의 육각형이다.
 * 
 * 1m2의 넓이에 참외 개수와 육각형의 임의의 꼭지점에서 출발해 반시계방향으로 둘레를 돌며 지나는 변의 방향과 길이가 주어진다.
 * 참외수를 구하시오.
 * 
 * 참외개수 K
 * 방향과 길이 정보가 주어진다.
 * 동: 1, 서: 2, 남: 3, 북: 4
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7',
'4 50',
'2 160',
'3 30',
'1 60',
'3 20',
'1 100',
]
const K = Number(input[0])
const INFO = input.slice(1).map(el=>el.split(' ').map(Number));

const solution = (k, info) => {

  const lengthList = info.map(el=>el[1]);

  let outterRect =  0;
  let innerRect =  0;
  let idx = -1;

  for(let i=0;i<6;i++){
    const cur = lengthList[i];
    const next = lengthList[(i+1)%6];

    const curRect = cur * next;

    if(curRect > outterRect){
      outterRect = curRect;
      idx = i;
    }
  }

  // ㄱ자를 돌린 형태이기 때문에 가장 큰 넓이 idx에서 +3, +4한 부분이 꺾인부분.(inner Rect부분)
  innerRect = lengthList[(idx+3)% 6] * lengthList[(idx+4)%6];
  
  const answer = (outterRect - innerRect) * k
  return answer;
}

console.log(solution(K, INFO));