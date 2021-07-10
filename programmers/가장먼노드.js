let visited = [];
let depth = [];
function solution(n, edge) {
    visited = new Array(n + 1).fill(false);
    depth = new Array(n + 1);
    return bfs(edge, 1);
}
function bfs(edge, start) {
    let q = [start];
    depth[0] = 0;
    depth[start] = 0;
    visited[start] = true;
    let level;
    while (q.length != 0) {
        let node = q.shift();
        console.log(`node : ${node}`)
        console.log(`depth : ${depth[node]}`);
        level = depth[node] + 1;
        console.log(`before : ${level}`)
        edge.forEach(el => {
            if (el[0] == node && !visited[el[1]]) {
                console.log('if옴')
                q.push(el[1]);
                visited[el[1]] = true;
                depth[el[1]] = level
            } else if(el[1]==node && !visited[el[0]]){
                q.push(el[0]);
                visited[el[0]] = true;
                depth[el[0]] = level
            }
        })
        console.log(`level : ${level}`);
        console.log();
    }
    
    return depth.filter((i) => i == level - 1).length;
}
let n = 6;
let edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
console.log(solution(n, edge));