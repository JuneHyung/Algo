/**
 * 1010 다리 놓기
 * 
 * 서쪽 N개 동쪽 M개 사이트가 있따.
 * 서쪽과 동쪽을 연결하려하고 한 사이트에는 한개의 다리만 연결될 수 있다.
 * 다리를 최대한 많이지으려하기때문에 서쪽의 사이트 개수만큼 지으려한다.
 * 다리끼리는 겹칠 수 없다.
 * 다리를 지을 수 있는 경우의 수는?
 * 
 * 첫줄 테케T
 * 둘줄 서쪽과 동쪽의 사이트 개수 정수 N M
 * 0<=N<=M<=30
 * 
 * 각 테케에 대해 주어진 조컨하에 다리를 지을 수 있는 경우의 수 출력
 */
/**
 * 조합인것 같다.
 * 공식은 생각나지 않아 찾아봄.
 * 
 * 조합공식
 * https://coding-factory.tistory.com/606#google_vignette
 * 
 * n! / (n-r)! * r!
 * m이 n보다 크니까 n자리에 m r자리에 n을 넣어서 풀이.
 * 
 *  
 */

// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'2 2',
'1 5',
'13 29',
]
const T = Number(input[0])


const solution = (n, m) => {

  console.log(n, m)

  const getFact = (num) => {
    if(num<=1) return 1;
    return num * getFact(num-1);
  }
  
  const result = Math.round(getFact(m) / (getFact(m-n) * getFact(n)));
  return result;
}


for(let t=1;t<=T;t++){
  const [N, M] = input[t].split(' ').map(Number);
  console.log(solution(N,M))
}