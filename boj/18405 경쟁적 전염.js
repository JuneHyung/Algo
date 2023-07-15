/**
 * 18405 경쟁적 전염
 * NxN크기 시험관이 있다.
 * 특정 위치에 바이러스가 존재할 수 있다.
 * 1~K번까지의 바이러스 종류 중 하나에 속한다.
 * 
 * 시험관에 존재하는 모든 바이러스는 1초마다 상하좌우방향으로 증식해 나간다.
 * 매초마다 번호가 낮은 종류의 바이러스부터 먼저 증식한다.
 * 증식과정 중 특정칸에 이미 어떤 바이러스가 있으면, 다른 바이러스가 들어갈 수 없다.
 * S초가 지난후 X,Y에 존재하는 바이러스의 종류를 출력하는 프로그램 작성.
 * S초 후 해당 위치에 바이러스가 존재하지 않으면, 0을 출력.
 * 
 * 첫줄에 자연수 N, K가 공백을 기준으로 구분되어 주어진다.
 * N개줄에 시험관 정보가 주어진다.
 * 없으면 0.
 * 마지막줄에 S,X,Y가 주어진다.
 * 
 * S초 뒤 X,Y에 있는 바이러스를 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
	'3 3',
'1 0 2',
'0 0 0',
'3 0 0',
'1 2 2',
]
const [N, K] = input.shift().split(' ').map(Number);
const [S, X, Y] = input.pop().split(' ').map(Number);
const BOARD = input.map(el => el.split(' ').map(Number))

const solution = (n, k, s, x, y, board) => {
	const dx = [-1, 1, 0, 0];
	const dy = [0, 0, -1, 1];
	const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < n;
	const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
	let q = Array.from({length:k+1},()=>[]);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] !== 0) {
				q[board[i][j]].push([i,j]);
				visited[i][j] = true;
			}
		}
	}

	for (let t = 0; t < s; t++) {
		for(let i=1;i<=k;i++){
			const next = [];
			
			while(q[i].length!==0){
				const [curX, curY] = q[i].shift();
				for(let k=0;k<4;k++){
					const nx = curX + dx[k];
					const ny = curY + dy[k];
					if(inRange(nx, ny) && !visited[nx][ny] && board[nx][ny]===0){
						visited[nx][ny] === true;
						board[nx][ny] = i;
						next.push([nx,ny])
					}
				}
			}
			q[i] = next;
		}
	}

	const answer = board[x-1][y-1];
	return answer;
}

console.log(solution(N, K, S, X, Y, BOARD));
