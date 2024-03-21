/**
 * 점 찍기
 * 
 * x축방향 a*k, y축방향 b*k만큼 떨어진 위치에 점을 찍기.
 * 원점과 거리가 d이하인 위치에만 찍는다.
 * 찍을 수 있는 점의 개수는?
 * 
 * dist = Math.sqrt(|x2 - x1|**2 + |y2 - y1|**2)
 * 
 */
const solution = (k, d) => {
  let answer = 0;
  
  const getPossible = (x) => Math.floor(Math.sqrt(d**2 - x**2));
  
  for(let x=0;x<=d;x+=k){
    const y = getPossible(x);
    const possible = Math.floor(y/k) +1;
    console.log(possible);
    answer += possible;
  }
  return answer;
}

const k = 2;
const d = 4;

console.log(solution(k, d));