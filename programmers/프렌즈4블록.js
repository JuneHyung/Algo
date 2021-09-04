// 해야될거
// 4각형되면 제거하기.
// how? 
// 3방향 탐색.
//
// 그리고?
// 빈공간 내리기
//
// 언제까지?
// 위작업을 했을 때 전과 후가 똑같을때까지.


function solution(m, n, board) {
    var answer = 0;
    let prevMap = board.map((el) => el.split(''));
    let curMap = board.map((el) => el.split(''));
    console.log('start')
    console.log(curMap);
    while (true) {
        console.log('prev')
        console.log(prevMap)
        goDelete(m, n, prevMap, curMap);
        console.log('delete')
        console.log(curMap)
        moveMap(m, n, prevMap, curMap);
        console.log('move')
        console.log(curMap);
        console.log(prevMap);
        if (sameMap(m, n, prevMap, curMap)) { break; }
        else {
            copyMap(m,n,prevMap, curMap);
        }
    }
    answer = countMap(m, n, curMap);
    return answer;
}
// 3방향 우 우하 하
let dx = [0, 1, 1];
let dy = [1, 1, 0];
function goDelete(m, n, prevMap, curMap) {
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            deleteMap(i, j, prevMap, curMap);
        }
    }
}
function deleteMap(x, y, prevMap, curMap) {
    let [cx, cy] = [x, y];
    let cnt = 0;
    let tmp = [];
    for (let i = 0; i < 3; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (prevMap[cx][cy] == prevMap[nx][ny]) {
            cnt++;
            tmp.push([nx, ny]);
            if (cnt == 3) {
                curMap[cx][cy] = '0';
                for (let i = 0; i < 3; i++) {
                    let tx = tmp[i][0];
                    let ty = tmp[i][1];
                    curMap[tx][ty] = '0';
                }
            }
        } else {
            cnt = 0;
            tmp.splice(0);
            break;
        }
    }
    console.log('indelete')
    console.log(prevMap);
}

function moveMap(m, n, prevMap, curMap) {
    console.log('inmethod b')
    console.log(prevMap)
    for (let i = m - 1; i > 0; i--) {
        for (let j = 0; j < n; j++) {
            if (curMap[i][j] == '0') {
                for (let k = i - 1; k >= 0; k--) {
                    if (curMap[k][j] != '0') {
                        curMap[i][j] = prevMap[k][j];
                        curMap[k][j] = '0'
                        break;
                    }
                }
            }
        }
    }
    console.log('inmethod a')
    console.log(prevMap)
}

function sameMap(m, n, prevMap, curMap) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (prevMap[i][j] != curMap[i][j]) return false;
        }
    }
    return true;
}
function copyMap(m, n, prevMap, curMap) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            prevMap[i][j] = curMap[i][j]
        }
    }
}
function countMap(m, n, prevMap) {
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (prevMap[i][j] == '0') cnt++;
        }
    }
    return cnt;
}
// let m = 8;
// let n = 5;
// let board =["HGNHU", "CRSHV", "UKHVL", "MJHQB", "GSHOT", "MQMJJ", "AGJKK", "QULKK"]
// console.log(solution(m,n,board))

// base(edge) Condition
// console.log(solution(2, 2, ["AA", "AA"])) // 4
// console.log(solution(2, 2, ["AA", "AB"])) //0

// 블록제거
// console.log(solution(3, 2, ["AA", "AA", "AB"])) // 4
// console.log(solution(4, 2, ["CC", "AA", "AA", "CC"])) //8

// 블록내리기
console.log(solution(6, 2, ["DD", "CC", "AA", "AA", "CC", "DD"])) //12
// console.log(solution(8, 2, ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"])) // 8
// console.log(solution(6,2, ["AA", "AA", "CC", "AA", "AA", "DD"])) // 8