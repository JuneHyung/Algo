
function solution(N, road, K) {
    const distance = Array(N + 1).fill(Infinity);
    
    // 빈 배열[]을 N+1개만큼 넣음
    const adj = Array.from({ length: N + 1 }, () => []);

    road.forEach(([a, b, c])=> {
        adj[a].push({ to: b, time: c });
        adj[b].push({ to: a, time: c });
    })

    const pq = [{ to: 1, time: 0 }];
    distance[1] = 0;
    while (pq.length != 0) {
        let { to, time } = pq.pop();

        adj[to].forEach(next => {
            if (distance[next.to] > distance[to] + next.time) {
                distance[next.to] = distance[to] + next.time;
                pq.push(next);
            }
        })
    }
    return distance.filter((item) => item <= K).length;
    
}
let N = 5;
let road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]];
let K = 3;
console.log(solution(N, road, K));