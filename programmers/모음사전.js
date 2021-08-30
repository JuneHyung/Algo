function solution(word) {
  let alpha = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 1; i <= 5; i++) {
    dfs(alpha, 0, i);
  }
  console.log(answers.sort());
  return answers.sort().indexOf(word)+1;
}
let answers = [];
function dfs(alpha, depth, num, arr = []) {
  if (depth == num) {
    let str = arr.join('');
    answers.push(str);
  }
  else {
    for (let i = 0; i < alpha.length; i++) {
      arr.push(alpha[i]);
      dfs(alpha, depth + 1, num, arr)
      arr.pop();
    }
  }
}
let word = "AAAE";
console.log(solution(word));