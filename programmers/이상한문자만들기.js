function solution(s) {
  let str = s.split(' ');
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    let tmp = str[i].split('');
    answer.push(tmp.map((el, i) => i % 2 == 0 ? el.toUpperCase() : el.toLowerCase()).join(''));
  }
  return answer.join(' ');
}
console.log(solution("try hello world"));