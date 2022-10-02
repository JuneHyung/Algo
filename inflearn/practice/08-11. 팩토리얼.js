const solution = (n) => { 
  let answer = 0;
  const DFS = (n) => { 
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}
console.log(solution(5))
/**
 * 5*DFS(4)
 *    4*DFS(3)
 *      3*DFS(2)
 *        2*DFS(1)
 *          1
 * 
 * 5*4*3*2*DFS(1)
 */