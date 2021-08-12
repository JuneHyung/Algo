function solution(dirs) {
    let move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };
    let cur = [0, 0];
    let route = new Set();
    let answer = 0;
    for (let i = 0; i < dirs.length; i++) {
        let idx = dirs[i];
        let nx = cur[0] + move[idx][0];
        let ny = cur[1] + move[idx][1];
        if (nx >= -5 && ny >= -5 && nx <= 5 && ny <= 5) {
            route.add(`${cur[0]}${cur[1]}${nx}${ny}`);
            route.add(`${nx}${ny}${cur[0]}${cur[1]}`);
            cur = [nx,ny]
        }
        answer = route.size/2;
    }

    return answer;
}
let dirs = "ULURRDLLU";
console.log(solution(dirs));