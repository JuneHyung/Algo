function solution(sizes) {
  let w = sizes.map(el => el[0]);
  let h = sizes.map(el => el[1]);
  const len = sizes.length;

  for (let i = 0; i < len; i++) {
    if (w[i] < h[i]) {
      let tmp = w[i];
      w[i] = h[i];
      h[i] = tmp;
    }
  };
  const maxW = Math.max(...w);
  const maxH = Math.max(...h);
  
  const answer = maxW * maxH;
  return answer;
}
// let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
console.log(solution(sizes));