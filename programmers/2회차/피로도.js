/* 피로도 */
const solution = (k, dungeons) => {
  let answer = 0;
  const chk = Array.from({ length: dungeons.length }, () => false);

  const DFS = (cnt) => {
    for (let i = 0; i < dungeons.length; i++) {
      const D = dungeons[i];
      if (!chk[i] && k >= D[0]) {
        chk[i] = true;
        k -= D[1];
        DFS(cnt + 1)
        chk[i] = false;
        k += D[1];
      }
      answer = Math.max(answer, cnt);
    }
  }
  DFS(0);
  return answer;
}

const k = 80;
// [입장전 최소피로도, 소모되는 피로도]
const dungeons = [[80, 20], [30, 10], [50, 40]]
console.log(solution(k, dungeons));