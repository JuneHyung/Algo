//maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
function solution(maps) {
    var answer = 1;
    let visited = maps;
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let n = maps.length;
    let m = maps[0].length;
    let q = [[0, 0]];
    visited[0][0] = 0;
    while (q.length != 0) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let [x, y] = q.shift();
            for (let j = 0; j < 4; j++) {
                let nx = dx[j] + x;
                let ny = dy[j] + y;

                if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny] == 0) continue;
                if (nx == n - 1 && ny == m - 1) return answer += 1;
                q.push([nx, ny]);
                visited[nx][ny] = 0;
            }
        }
        answer++;
    }
    return -1;
}
let maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]];
console.log(solution(maps));