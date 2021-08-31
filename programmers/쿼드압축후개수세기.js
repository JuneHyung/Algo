function solution(arr) {
  checking(arr, 0, 0, arr.length);
  return answer;
}
let answer = [0,0]
function checking(arr, x, y, n) {
  let flag = true;
  if (n == 1) return answer[arr[x][y]]++;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (arr[x][y] != arr[i][j]) {
        flag = false;
        break;
      }
    }
  }
  if (flag) return answer[arr[x][y]]++;
  n /= 2;
  checking(arr, x, y, n);
  checking(arr, x+n, y, n);
  checking(arr, x, y+n, n);
  checking(arr, x+n, y+n, n);
}
let arr = [[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]];
console.log(solution(arr));