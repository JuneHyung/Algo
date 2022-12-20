function solution(s) {
  let answer = [];
  let arr = s.split(' ').map(el=> `${el.charAt(0).toUpperCase()}${el.slice(1).toLowerCase()}`);
  
  answer = arr.join(' ');
  return answer;
}

const s = "3people unFollowed me"
console.log(solution(s));