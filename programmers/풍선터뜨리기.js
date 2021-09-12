function solution(a) {
  var answer = new Set;
  let len = a.length;
  let left = [];
  let right = [];
  let lmin = a[0];
  let rmin = a[len-1];


  left = a.map((el) => {
    return lmin = Math.min(lmin, el);
  })
  right = a.reverse().map((el) => {
    return rmin = Math.min(rmin, el);
  })
  for (let i = 0; i < len; i++) {
    answer.add(left[i]);
    answer.add(right[i]);
  }

  return answer.size;
}
let a = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];
// let a = [9, -1, -5]
console.log(solution(a));