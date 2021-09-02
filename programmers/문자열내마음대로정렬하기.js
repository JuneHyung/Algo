function solution(strings, n) {
  var answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] == b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }

  })
  // a[n]==b[n] ? (a>b) - (b>a) : (a[n]>b[n]) - (b[n]>a[n])
  return answer;
}
let strings = ["sun", "bed", "car"];
  let n = 1;
  console.log(solution(strings, n))