/**
 * 등대
 * 1부터 n까지 서로 다른 번호가 매겨진 등대가 n개 있다.
 * n-1개의 길이 존재하며, 어느 등대에서 출발해도 모든 등대까지 이동할 수 있다.
 * 몇군대만 등대를 켜두려한다.
 * 한 뱃길의 양쪽끝 등대 중 적어도 하나는 켜져있도록 해야한다.
 * 켜두어야 하는 등대의 최소값 리턴
 * 
 * 1. 2개이상 연겯된 node찾아서 해당 node들로만 조합을 구하여, 해당상황일떄 불키고 다 켜질떄 바로 답 return 
 * 2. leaf node면 거기에 연결된건 켜져있어야 함. => 다음 반복 어떻게?
 * 3. lighthouse에서 a, b둘다 방문안한것만 골라내기
 */
const solution = (n, lighthouse) =>{
  let result = 0;
  while(true){
    console.log(lighthouse)
    if(lighthouse.length===0) return result;
    const graph = Array.from({length:n+1},()=>[])
    for(const [a, b] of lighthouse){
      graph[a].push(b)
      graph[b].push(a)
    }

    console.log(graph)

    const leaf = [...new Set(graph.filter(el=>el.length===1))]
    const visited = Array.from({length:n+1},()=>false);
    
    leaf.forEach((cur)=>{
      if(!visited[cur]){
        visited[cur] = true;
        if(graph[cur].length!==1) result+=1;
        else result+=0.5; // 서로만 남은 경우
      }
    })
  
    console.log(visited)
    lighthouse = lighthouse.filter(el=>{
      const [a, b] = el;
      return !visited[a] && !visited[b]
    })

    console.log()
  }
}

// const n = 8;
// const lighthouse = [[1, 2], [1, 3], [1, 4], [1, 5], [5, 6], [5, 7], [5, 8]]
// const n = 10;
// const lighthouse = [[4, 1], [5, 1], [5, 6], [7, 6], [1, 2], [1, 3], [6, 8], [2, 9], [9, 10]]
const n = 8;
const lighthouse = [[1, 2], [2, 5], [1, 4], [4, 6], [1, 3], [3, 7], [7, 8]]
console.log(solution(n, lighthouse))