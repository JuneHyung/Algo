/**
 * 올바른 괄호의 갯수
 */
const solution = (n) => {
  const dp = [1,1,2,5]
  for(let i=4; i<=12;i++){
    let sum = 0;
    for(let j=0; j<(i);j++){
      sum += dp[j]*dp[i-j-1]; 
    }
    dp[i] = sum;
    // console.log(dp)
    // console.log()
  }
  return dp[n];
}
const n = 5;
console.log(solution(n))
/*
1
()

2
()()
(())

3
안 괄호 2 | 밖 괄호 0 ((())), (()())
안 괄호 1 | 밖 괄호 1 (())(),
안 괄호 0 | 밖 괄호 2 ()(()), ()()()

()()()
(())()
()(())
(()())
((()))

4
()()()()
(())()()
()()(())

((()))()
(()())()
(())()()

*/