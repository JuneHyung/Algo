/**
 * 17266 어두운 굴다리
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'2',
'2 4',
]
const N = Number(input.shift())
const M = Number(input.shift())
const INFO = input.shift().split(' ').map(Number);

const solution = (n, m, info) =>{
  console.log(info)
  
  
  let lt = 1;
  let rt = n;
  let result = 0;

  const possible = (mid) =>{
    let prev = 0;
    for(let i=0;i<info.length;i++){
      if(info[i] - mid <= prev){
        prev = info[i]+mid;
      }else{ return false}
    }
    return n-prev <=0;
  }
  while(lt<=rt){
    let mid = Math.floor((lt+rt)/2);
    if(possible(mid)){
      result = mid;
      rt = mid-1;
    }else{
      lt= mid+1;
    }
  }
  return result;
}

console.log(solution(N, M, INFO))