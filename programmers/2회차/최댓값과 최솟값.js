const solution = (s) => {
  let answer = '';
  const arr = s.split(' ')
  answer = [Math.min(...arr), Math.max(...arr)].join(' ');
  return answer;
}

const s = "1 2 3 4";
console.log(solution(s));