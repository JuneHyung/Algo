const solution = (s) => { 
  let answer = 0;
  let stack = [];
  const LEFT = '(', RIHGT = ')';
  for (let i = 0; i < s.length;i++) { 
    if (s[i] === LEFT) stack.push(s[i]);
    else { 
      stack.pop();
      if (s[i - 1] === LEFT) answer += stack.length;
      else answer += 1;
    }
  }
  return answer;
}
let a="()(((()())(())()))(())";
console.log(solution(a));