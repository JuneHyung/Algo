/**
 * 11497 통나무 건너뛰기
 * 원형으로 세우고 뛰려한다.
 * 인접한 통나무높이차가 최소가 되게 하려한다.
 * 
 * 건너뛰기 난이도는 인접한 두 통나무간의  높이의 차의 최대값으로 결정된다.
 * 24579면 29745순서로 하면 첫 번째와 마지막 역시 인접해있다.
 * 2인것과 5인것도  인접해있다.
 * 25974를 하면 난이도가 4가된다.
 * 테스트케이스가 주어지고, 높이가 주어진다.
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'7',
'13 10 12 11 10 11 12',
'5',
'2 4 5 7 9',
'8',
'6 6 6 6 6 6 6 6',
]
const T = Number(input.shift())

const solution = (n, info) => {

  const arr = Array.from({length: n},()=>0);
  let idx = 0;
  info.sort((a,b)=>a-b);

  const mid = Math.floor(n/2);1
  arr[mid] = info[n-1];
  if(n%2!==0) info.pop();
  for(let i=0;i<mid;i++){
    arr[i] = info[idx];
    arr[n-i-1] = info[idx+1];
    idx+=2;
  }
  let answer = Number.MIN_SAFE_INTEGER;
  // console.log(arr)
  for(let i=0;i<n-1;i++){
    answer = Math.max(Math.abs(arr[i]- arr[i+1]), answer)
  }

  return answer;
}

for(let t= 0;t<T;t++){
  const N = Number(input.shift())
  const INFO = input.shift().split(' ').map(Number)
  console.log(solution(N, INFO))
}