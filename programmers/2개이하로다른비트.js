function solution(numbers) {
  let answer = [];
  const len = numbers.length;
  for (let t = 0; t < len; t++) {
    let num = numbers[t];
    let bin = num.toString(2);
    if (num % 2 == 0) {
      answer.push(num+1);
    } else {
      bin = bin.split('')
      let idx = 0;
      for (idx = bin.length; idx > 0; idx--) {
        if (bin[idx] == '0') break;
      }
      idx ? bin[idx] = '1' : bin.unshift('1');
      bin[idx + 1] = '0';
      answer.push(parseInt(bin.join(''), 2));
    }
  }
  // var answer = [];
  return answer;
}
let numbers = [4, 7];
console.log(solution(numbers));