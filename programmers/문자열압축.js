function solution(s) {
  let len = s.length;
  let str = [];
  if (len == 1) return 1;
  else {
    for (let i = 1; i <= len; i++) {
      let tmp = '';
      let cnt = 1;
      for (let j = 0; j < len; j += i) {
        let curStr = s.substr(j, i);
        let nextStr = s.substr(j + i, i);
        if (curStr == nextStr) cnt++;
        else {
          // console.log(`before tmp : ${tmp} / curStr : ${curStr} / nextStr : ${nextStr} / cnt : ${cnt}`)
          tmp = cnt > 1 ? tmp + cnt + curStr : tmp + curStr;
          // console.log(`after tmp : ${tmp}`)
          // console.log();  
          cnt = 1;
        }
      }
      str.push(tmp.length);
    }
  }
  return Math.min(...str);
}
let s = 'aabbcdcdababcdcd';
console.log(solution(s));