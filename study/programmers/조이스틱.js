/**
 * 조이스틱
 * 맨처음 A로만 이루어져있고
 * 각 방향으로 움직인다.
 * 상 : 다음 알파벳 (Z면 A)
 * 하 : 이전 알파벳 (A면 Z)
 * 좌 : 커서를 좌로 이동 (처음이면 마지막으로 이동)
 * 우 : 커서를 우로 이동 (끝이면 처음으로 이동)
 * 
 * name이 주어졌을 떄, 조이스틱 조작의 최소횟수 구하기
 */

const solution = (name) => {
  const nameArr = name.split('')
  const n = name.length;
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = 0;
  let min = n-1;
  for(let i=0;i<n;i++){
    let target = nameArr[i];
    const up = alpha.indexOf(target);
    const down = 26-alpha.indexOf(target);
    const cnt = Math.min(up, down)
    answer += cnt;

    let nextIdx = i+1;
    while(nextIdx < n && nameArr[nextIdx]==='A') nextIdx+=1;


    /**
     * min : 좌에서 우
     * (i*2) + n-nextIdx : 좌 -> 우 가다가 돌아서 우->좌
     * i + 2*(n-nextIdx) : 우 -> 좌 가다가 돌아서 좌->우
     */
    min = Math.min(min, (i*2) + n - nextIdx, i + 2*(n-nextIdx));
  }

  answer+=min
  return answer;

}

const name = 'BBBAAAB';
console.log(solution(name))