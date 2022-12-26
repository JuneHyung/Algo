const solution = (n, stations, w) => {
  let answer = 0;
  let idx = 0;
  let start = 1;
  while(start<=n){
    if(start <= stations[idx]+w && start >= stations[idx]-w){
      start = stations[idx]+w;
      idx++;
    }else{
      start += 2*w;
      answer++;
    }
    start++;
  }
  return answer;
}

const n = 11;
const stations = [4,11];
const w = 1;
console.log(solution(n, stations, w));