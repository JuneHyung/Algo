/**
 * 4949 균형잡힌 세상
 * 괄호는 소괄호 대괄호 두종류.
 * 좌소괄호는 우 소괄호와만 짝을 이뤄야한다. (대괄호 마찬가지)
 * 모든 우괄호들은 자신과 짝을 이룰 수 있는 좌괄호가 있다.
 * 짝은 1:1매칭만 가능하다. 하나가 둘 이상의 괄호와 짝지어지지 않는다.
 * 짝을 이루는 두 괄호가 있을 떄 그 사이 문자열도 균형이 잡혀야 한다.
 * 균형잡힌 문자열인지 아닌지 알아보자.
 * 괄호가 하나도 없어도 균형잡힌 문자열이다.
 */
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = [
  "So when I die (the [first] I will see in (heaven) is a score list).",
  "[ first in ] ( first out ).",
  "Half Moon tonight (At least it is better than no Moon at all].",
  "A rope may form )( a trail in a maze.",
  "Help( I[m being held prisoner in a fortune cookie factory)].",
  "([ (([( [ ] ) ( ) (( ))] )) ]).",
  " .",
  ".",
];
const solution = (str) => {
  const arr = str.split("");
  const check = (c) => {
    if (c === "(" || c === ")" || c === "[" || c === "]") return true;
    return false;
  };

  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (check(cur)) {
      if (stack.length === 0) stack.push(cur);
      else {
        const last = stack.pop();
        if (cur === ")" && last === "(") continue;
        else if (cur === "]" && last === "[") continue;
        else if (
          (cur === "(" && last === "(")
          || (cur === "(" && last === "[") 
          || (cur === "[" && last === "(")
          || (cur === "[" && last === "[")) {
          stack.push(last);
          stack.push(cur)
        }
        else return "no";
      }
    }
  }
  // console.log(stack);

  return stack.length===0 ? 'yes' : 'no';
};

for (let t = 0; t < input.length; t++) {
  if (input[t] === ".") break;
  console.log(solution(input[t]));
}
