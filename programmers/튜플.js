function solution(s) {
  
  s = s.replace(/[{},]/g, ' ')
  let tmp = s.split(' ');
  let obj = {};

  tmp.forEach(el => {
    (Object.keys(obj).indexOf(el) != -1)? obj[el] += 1: obj[el] = 1
  })
  
  let keys = Object.keys(obj);
  keys.splice(keys.indexOf(''),1);

  let answer = keys
    .map((el) => {
      return[parseInt(el), obj[el]];
    }).sort((a, b) => {
      return b[1] - a[1];
    }).map((el) => {
      return el[0]
    });
  
  return answer;
}
let s = "{{20,111},{111}}"
console.log(solution(s));