function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    
    for (let i = 0; i < computers.length; i++) {
        console.log(`start : ${visited} , i : ${i} `)
        if (!visited[i]) {
            dfs(computers, i, visited)
            answer++;
            console.log(answer)
        }
    }
    return answer;
}

function dfs(com, idx, v) {
    v[idx] = true;
    console.log(v)
    for (let i = 0; i < com.length; i++) {
        if (com[idx][i]==1 && !v[i]) {
            
            dfs(com, i, v);
        }
    }
}

let n = 3;
let computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];
console.log(solution(n, computers));