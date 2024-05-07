/**
 * 전력망을 둘로 나누기
 * 전선들 중 1개를 끊어서 현재 전력망 네트워크를 2개로 분할하려 한다.
 * 2 전력망이 갖게되는 송전탑 개수를 치대한 비슷하게 맞추고자 한다.
 * 두 개 전력망이 가지고 있는 송전탑 개수의 차이를 리턴(절대값)
 * 
 * @param {number} n 
 * @param {Array<Array<number>>} wires 
 */
const solution = (n, wires) => {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (L, graph, visited) => {
    visited[L] = true;
    for(const next of graph[L]){
      if(!visited[next]) dfs(next, graph, visited);
    }
  }

  for(let i=0; i<wires.length;i++){
    const graph = Array.from({length: n+1},()=>[]);

    // 하나씩 끊기
    for(let j=0;j<wires.length;j++){
      if(i==j) continue;
      const [a, b] = wires[j];
      graph[a].push(b);
      graph[b].push(a);
    }

    const visited = Array.from({length: n+1},()=>false);
    dfs(1, graph, visited);

    const lt = visited.filter(el=>el===true).length;
    const rt = n-lt;
    const sub = Math.abs(lt - rt);
    if(answer > sub) answer = sub;
  }
  return answer;
}
const n = 9;
const wires = [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]
console.log(solution(n, wires))