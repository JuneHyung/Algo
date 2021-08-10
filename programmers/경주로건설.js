function solution(board) {
    let map = board;
    bfs(0, 0, 0, -1, map);
    return answer;
}
let answer = Infinity;    
const dx = [1,-1,0,0];
const dy = [0,0,1,-1];
function bfs(x, y, cost, dir, map) {
    let q = [[x, y, cost, dir]];
    map[x][y] = 1;
    
    while (q.length > 0) {
        let cur = q.shift();
        let cur_x = cur[0];
        let cur_y = cur[1];
        let cur_cost = cur[2];
        let cur_dir = cur[3];
        if (cur_x == map.length - 1 && cur_y == map.length - 1) {
            answer = Math.min(answer, cur_cost);
            continue;
        }
        for (let i = 0; i < 4; i++) {
            let nx = cur_x + dx[i];
            let ny = cur_y + dy[i];
            if (nx >= 0 && nx < map.length && ny >= 0 && ny < map.length && map[nx][ny] != 1) {
                let ncost = 0;
                if (cur_dir == -1 || cur_dir == i) {
                    ncost = cur_cost + 100;
                } else if (cur_dir != i) {
                    ncost = cur_cost + 600;
                }

                if (map[nx][ny] == 0) {
                    map[nx][ny] = ncost;
                    q.push([nx, ny, ncost, i, map]);
                } else if (map[nx][ny] >= ncost) {
                    map[nx][ny] = ncost;
                    q.push([nx,ny,ncost,i]);
                }
            }
        }

    }
}
let board = [[0,0,0],[0,0,0],[0,0,0]];
console.log(solution(board));