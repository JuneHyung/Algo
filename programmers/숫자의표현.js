  function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
      let sum = 0;
      let tmp = i;
      while (true) {
        sum += tmp;
        if (sum == n) {
          answer++;
          break;
        }
        else if (sum > n) {
          break;
        }
        tmp++;
      }
    }
    return answer;
  }
  let n = 15;
  console.log(solution(15));