// 시간초과
function findMeasure(idx) { 
  if(idx===1){
    return 0;
  }else{
    for (let i =Math.max(2, idx/10000000); i <= Math.sqrt(idx); i++) { 
      if (idx % i == 0 && idx/i <= 10000000) { 
        return idx/i;
      }
    }
    return 1;
  }
}
function solution(begin, end) {
  const length = end - begin +1;
  let answer = Array(length).fill(0);
  for (let i = begin; i <= end; i++) { 
    answer[i - begin] = findMeasure(i);
  }
  return answer;
}

const begin = 1;
const end = 10;
console.log(solution(begin, end))