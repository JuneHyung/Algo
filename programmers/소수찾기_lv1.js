function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i++) {
    answer += isPrime(i)
  }
  return answer;
}
function isPrime(num) {
    if( num%2 == 0) 
        return num==2 ? 1 : 0;

    for(let i=3; i<=Math.sqrt(num); i += 2) { 
        if( num % i == 0)
            return 0;
    }
	return 1; 

 }
let n = 10;
console.log(solution(n))