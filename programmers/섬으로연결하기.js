// 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다
// 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.
// 섬의 개수 n은 1 이상 100 이하입니다.
// costs의 길이는 ((n-1) * n) / 2이하입니다.

// 임의의 i에 대해,
// costs[i][0] 와 costs[i][1]에는 다리가 연결되는 두 섬의 번호가 들어있고,
// costs[i][2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.

// 같은 연결은 두 번 주어지지 않습니다. 
// 또한 순서가 바뀌더라도 같은 연결로 봅니다.
// 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.

// 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 
// 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.
// 연결할 수 없는 섬은 주어지지 않습니다.
function solution(n, costs) {
    var answer = 0;
    const parent = [];
    for (let i = 0; i < n; i++) {
        parent.push(i);
    }
    costs.sort((a, b) => a[2] - b[2]);
    console.log(costs);
    for (const cost of costs) {
        if (!findParent(parent, cost[0], cost[1])) {
            answer += cost[2];
            unionParent(parent, cost[0], cost[1]);
            console.log(cost[0], cost[1], answer);
        }
        console.log(parent);
    }
    return answer;
}
function findParent(parent, a, b) {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    console.log(`find n1 : ${n1}, n2 : ${n2}`)
    if (n1 == n2) return true;
    else return false;
}

function unionParent(parent, a, b) {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    console.log(`union n1 : ${n1} , n2 : ${n2}`)
    if (n1 < n2) return parent[n2] = n1;
    else return parent[n1] = n2;
}

function getParent(parent, x) {
    if (parent[x] == x) return x;
    return parent[x] = getParent(parent, parent[x]);
}
let n = 4;
let costs = [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]];
console.log(solution(n, costs));