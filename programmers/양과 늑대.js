/**
 * 0은 양 , 1은 늑대
 * info[0]의 값은 항상 0입니다. 즉, 0번 노드(루트 노드)에는 항상 양이 있습니다
 * 동일한 간선에 대한 정보가 중복해서 주어지지 않습니다.
 * 항상 하나의 이진 트리 형태로 입력이 주어지며, 잘못된 데이터가 주어지는 경우는 없습니다.
 * 0번 노드는 항상 루트 노드입니다.
 */

 function solution(info, edges) {
  let answer = 0;
  const len = info.length;
  const graph = Array.from({ length: len }, () => []);
  for (let [a, b] of edges) graph[a].push(b);
  // console.log(graph)

  function DFS(cur, sheep, wolf, possible) {
    let possibleList = [...possible];
    let curIdx = possible.indexOf(cur)

    info[cur] === 0 ? sheep++ : wolf++;
    answer = Math.max(answer, sheep)
    if (sheep === wolf) return;

    possibleList.push(...graph[cur])
    possibleList.splice(curIdx, 1);

    for (next of possibleList) {
      DFS(next, sheep, wolf, possibleList)
    }
  }
  // cur, sheep, wolf, possible
  DFS(0, 0, 0, [0])
  return answer;
}

const info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
const edges = [[0, 1], [1, 2], [1, 4], [0, 8], [8, 7], [9, 10], [9, 11], [4, 3], [6, 5], [4, 6], [8, 9]];
console.log(solution(info, edges)); // 5