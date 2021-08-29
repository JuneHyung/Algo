function solution(rows, columns, queries) {
  let map = [];
  makeMap(map, rows, columns);
  // console.log(map);
  var answer = [];
  for (let t=0; t < queries.length; t++) {
    const [x1, y1, x2, y2] = queries[t];
    // console.log(x1, y1, x2, y2);
    const stack = [];
    // 윗변 우로 +1
    for (let i = y1; i < y2; i++) stack.push(map[x1][i]);
    // 우변 아래로 +1
    for (let i = x1; i < x2; i++) stack.push(map[i][y2]);
    // 아래변 좌로 -1
    for (let i = y2; i > y1; i--) stack.push(map[x2][i]);
    // 좌변 위로 -1
    for (let i = x2; i > x1; i--) stack.push(map[i][y1]);

    // 정답 찾기
    answer.push(Math.min(...stack));
    
    // 가장 마지막에 한거 앞으로 보내기.
    stack.unshift(stack.pop());
    changeMap(map, [x1, y1, x2, y2], stack);
  }

  return answer;
}
function makeMap(map, rows, columns) {
  let num = 1;
  for (let i = 0; i <= rows; i++) {
    map[i] = [0, ];
    for (let j = 0; j < columns; j++) {
      if (i == 0) {
        map[i].push(0);
      } else {
        map[i].push(num);
        num++;
      }
    }
  }
}
function changeMap(map, [x1, y1, x2, y2], stack) {
  for (let i = y1; i < y2; i++) map[x1][i] = stack.shift();
  for (let i = x1; i < x2; i++) map[i][y2] = stack.shift();
  for (let i = y2; i > y1; i--) map[x2][i] = stack.shift();
  for (let i = x2; i > x1; i--) map[i][y1] = stack.shift();
}
let rows = 6;
let columns = 6;
let queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]];
console.log(solution(rows, columns, queries));