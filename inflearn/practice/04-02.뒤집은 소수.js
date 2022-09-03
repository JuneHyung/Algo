const checkPrime = (num) => {
  const sqrt = Math.sqrt(num);
  if (num < 2) return false;
  for (let i = 2; i <= parseInt(sqrt); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const solution = (arr) => {
  let answer = arr.map(el => {
    return Number(el.toString().split('').reverse().join(''))
  }).filter(num => checkPrime(num));
  return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));