let limit;
let distance = [];
let visited = [];
let result;
function solution(N, road, K) {
    limit = K;
    result = 0;
    visited = new Array(N + 1).fill(false);
    distance = new Array(N + 1).fill(Infinity)
    distance[1] = 0;

    let pq = [1];

    dijkstra(1, road, pq);
    console.log(distance);
    return distance.filter((item) => { return item <= limit }).length;
}
function dijkstra(i, road, pq) {
    while (pq.length) {
        // distance가 최소인 index를 pq에서 잘라내 꺼낸다.
        i = pq.splice(findMin(pq), 1).pop();
        if (visited[i]) continue;
        visited[i] = true;

        // road는 양방향이므로 item[0]과 item[1] 둘중 하나라도 존재하면 node에 붙은 edge임.
        let found = road.filter(item => { return item[0] == i || item[1] == i });
        // node에 붙은 edge들을 가중치기준으로 정렬
        found.sort((a, b) => a[2] - b[2]);

        // found를 돌면서
        for (let item of found) {
            let src = i; // 최소인 idx (기존 idx)
            let dst = item[0] == i ? item[1] : item[0];
            // 기존의 distance와 새로찾은 distance의 비교 후 갱신.
            if (distance[dst] > distance[src] + item[2]) {
                distance[dst] = distance[src] + item[2];
            }
            if (!visited[dst] && pq.indexOf(dst) == -1) {
                pq.push(dst);
             }
        }
    }
}
// arr중 distance가 최소인 node의 arr index값을 리턴해주는 함수.
function findMin(arr) {
    let min = distance[arr[0]];
    let idx = 0;
    for (let i in arr) {
        if (min > distance[arr[i]]) {
            min = distance[arr[i]]
            idx = i;
        }
    }
    return idx;
}
let N = 5;
let road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]];
let K = 3;
console.log(solution(N, road, K));