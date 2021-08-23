// function solution(n, money) {
//   dfs(money, n, 0);
//   let answer = answers.length % 1000000007;
  
//   return answer;
// }
// let answers = [];
// function dfs(money, n, sum, arr = []) {
//   if (sum == n) answers.push([...arr]);
//   else {
//     for (let i = 0; i < money.length; i++) {
//       arr.push(money[i]);
//       if (sum < n) {
//         dfs(money.slice(i), n, sum + money[i], arr);
//       }
//       arr.pop();
//     }
//   }
// }

function solution(n, money) {
  let arr = new Array(n).fill(0);
  arr.unshift(1);
  console.log(arr);
  money.forEach(el => {
    for (let i = el; i < n + 1; i++) {
      arr[i] += arr[i - el];
    }
    console.log(arr);
  });
  
  return arr[n] % 1000000007;
}

let n = 5;
let money = [1, 2, 5];
console.log(solution(n, money));
