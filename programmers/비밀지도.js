function solution(n, arr1, arr2) {
  arr1 = changeMap(arr1,n);
  arr2 = changeMap(arr2, n);
  let tmap = makeMap(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] == '1' || arr2[i][j] == '1') tmap[i][j] = '#';
    }
  }
  console.log(tmap);
  let answer = tmap.map(el => { return el.join('').replace(/0/gi, ' ')});
  return answer;
}
function makeMap(n) {
  let tmp = [];
  for (let i = 0; i < n; i++) {
    tmp[i] = [];
    for (let j = 0; j < n; j++) {
     tmp[i][j] = 0
    }
  }
  console.log(tmp);
  return tmp;
}
function changeMap(arr,n) {
  let tmp = arr.map((el) => {
    let ch = el.toString(2).split('')
    if (ch.length < n) {
      for (let i = ch.length; i < n; i++) {
        ch.unshift('0')
      }
    }
    return ch;
  });
  return tmp;
}
let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
console.log(solution(n, arr1, arr2));