/**
 * 1911 흙길 보수하기
 * 캠프장소에서 본원까지 이어지는 흙으로된 비밀길 위에 폭우가 내려 N개 물웅덩이가 생겼다.
 * 물 웅덩이를 덮을 수 있는 길이가 L인 널빤지들을 충분히 갖기ㅗ있어 다리를 만들어 덮으려 한다.
 * 물웅덩이의 위치와 크기에 대한 정보가 주어질 때 모든 물 웅덩이들을 덮기 위해 필요한 널빤지들의 최소 개수를 구해라.
 * 위치는 0이상 10억이하
 * 
 * 현재위치와 물웅덩이의 시작위치중 큰 값(max)을 가지고 
 * end에서 그만큼 빼서 길이만큼 올림처리한게 갯수.
 * 그다음 나의 위치를 max값에 다가 널빤지 길이만큼 더해줌.
 */
// const fs = requrie('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 3',
'1 6',
'13 17',
'8 12',
]
const [N, L] = input.shift().split(' ').map(Number);
const INFO = input.map(el=>el.split(' ').map(Number));

const solution = (n, l, info) => {
  info.sort((a,b)=>a[0]-b[0]);
  
  let pos = 0, answer = 0;
  
  for(const [st, ed] of info){
    if(ed<=pos) continue;
    const maxStartPoint = Math.max(pos, st);
    const cnt = Math.ceil((ed-maxStartPoint)/l);
    answer+=cnt;
    pos = maxStartPoint + cnt*L;
  }
  return answer;
}

console.log(solution(N, L, INFO))