const answer = [];
function solution(s) {
  for (let t = 0; t < s.length; t++) {
    let str = s[t];
    let stack = [];
    let tmp = find110(str, stack);
    console.log(tmp);
    if (tmp == '') answer.push(str);
    else {
      const tmpStr = stack.join('');
      const idx = tmpStr.lastIndexOf('0')+1;
      answer.push(tmpStr.substring(0,idx) + tmp + tmpStr.substring(idx))
    }
  }
  return answer;
}
function find110(str, stack) {
  let tmp = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if(stack.length>=2) {
      const b = stack.pop();
      const a = stack.pop();
      if (a == '1' && b == '1' && c == '0') {
        tmp += '110';
        continue;
      }
      stack.push(a);
      stack.push(b);
    }
    stack.push(c);
  }
  return tmp;
}

// [ '1101', '100110110', '0110110111' ]
let s = ["1110", "100111100", "0111111010"];
console.log(solution(s));