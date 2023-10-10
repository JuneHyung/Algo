/**
 * 좌우 대각선 한 군데로 더해나갈 것이다.
 * 최대값은?
 */

const solution = (triangle) =>{
  const n = triangle.length;
    const dp = triangle.slice();
    for(let i=n-2;i>=0;i--){
      for(let j=0;j<i+1;j++){
        dp[i][j] += Math.max(dp[i+1][j], dp[i+1][j+1])
      }
    }
    console.log(dp)
    return dp[0][0]
}


const triangles = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(triangles))