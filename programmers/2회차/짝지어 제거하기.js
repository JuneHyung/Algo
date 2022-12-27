/*짝지어 제거하기*/
const solution = (s) => {
  let answer = 0;
  const stack = []
  const str = s.split('');
  if (s.length % 2 !== 0) return 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    } else {
      stack.push(str[i]);
    }
  }

  answer = stack.length === 0 ? 1 : 0
  return answer
}
const s = "baabaa";
console.log(solution(s))