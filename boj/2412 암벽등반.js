/**
 * 2412 암벽등반
 * 암벽에 n개의 홈이 파져있다.
 * 각 좌표는 (x,y)같이 표현된다.
 * |a-x| <= 2이고, |b-x|<=2이면, (x,y)에서 (a,b)로 이동할 수 있다.
 * y=T일때까지, 암벽정상까지 갈꺼다.
 * 현재 위치는 0,0이다.
 * 이동회수를 최소로하면서 이동할때 최소 이동횟수 구하기.
 * 오를 수 없다면 -1 출력
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5 3',
'1 2',
'6 3',
'4 1',
'3 2',
'0 2',
]

const [N, T] = input.shift().split(' ').map(Number);
const INFO = input.map(el => el.split(' ').map(Number))

const solution = (n, t, info) => {
  info.sort((a, b) => { 
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else return 0;
  })  
  const visited = Array.from({ length: 50001 }, () => false);
  let q = [];
  q.push([0, 0, 0, 0])
  while (q.length !== 0) { 
    let [curX, curY, cnt, idx] = q.shift()
    if (curY === t) return cnt;
    for (let i = idx; i < n; i++) { // right
      const [nx, ny] = info[i];
      const distX = Math.abs(curX - nx);
      const distY = Math.abs(curY - ny);
      if (!visited[i]) { 
        if (distX <= 2 && distY <= 2) {
          visited[i] = true;
          q.push([nx, ny, cnt + 1, i]);
        }
        else if (distX > 2 && distY > 2) break;
      }
    }

    for (let i = idx; i >= 0; i--) {  // left
      const [nx, ny] = info[i]
      const distX = Math.abs(curX - nx);
      const distY = Math.abs(curY - ny);
      if (!visited[i]) { 
        if (distX <= 2 && distY <= 2) { 
          visited[i] = true;
          q.push([nx,ny,cnt+1, i])
        }
        else if (distX > 2 && distY > 2) break;
      }
    }
  }
  return -1;
}
console.log(solution(N, T, INFO))