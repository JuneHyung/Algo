function solution(s){
  var answer = true;
  let str = s.split('');
  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') stack.push(str[i]);
    // else if (stack.length != 0 || stack.pop(')')) answer = false;      
    else {
      if (stack.length == 0 || stack.pop() == ')') answer = false;
    }
  }
  if (stack.length != 0) answer = false;
  return answer;
}
let s = ")";
console.log(solution(s));