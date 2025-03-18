/**
 * 15651 N과 M(3)
 * N과 M이 주어졌을 때 길이가 M인 수열 구하기.
 * 1~N까지 자연수 중 M개를 고른 수열
 * 같은 수를 여러 번 골라도 된다.
 */
/**
 * 중복수열 구하기
 */
// const fs =require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '4 2';
const [N, M] = input.split(' ').map(Number);


const solution = (n, m) => {
  const arr = Array.from({length: n},(_,i)=>i+1);

  const getPermu = (arr, m) => {
    if(m===1) return arr.map(el=>[el]);
    const result = [];

    arr.forEach((fixed, idx, origin)=>{
      const rest = origin.slice();
      const permu = getPermu(rest, m-1);
      const attach = permu.map(el=>[fixed, ...el ])
      result.push(...attach);
    })
    
    return result;
  }

  const permu = getPermu(arr, m);
  return permu.map(el=>el.join(' ')).join('\n')
}

console.log(solution(N, M));
