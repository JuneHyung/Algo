/**
 * 7490 0 만들기
 * 1부터 N까지 수를 오름차순으로 쓴 수열 1 2 3 ... N에서
 * +, - ' ' 3가지 중 하나를 넣어 수식을 계산하고, 0이 될 수 있는 지 알아보자.
 * 공백은 숫자를 이어 붙이는걸 뜻한다.
 * N이 주어졌을 떄 수식의 결과가 0이되는 모든 수식을 찾아라.
 * 테케와 자연수 N는 최대9개 N은 3이상으로 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
'3',
'7',
]
const N = Number(input[0])

const solution = (num) => {
  const numArr = Array.from({length:num},(_,i)=>i+1);
  const answer = [];
  
  const dfs = (signArr, depth) => {
    if(depth===num-1){
      let line = '';
      for(let i=0;i<num-1;i++){
        line+= numArr[i] + signArr[i];
      }
      line += numArr[num-1];
      const result = eval(line.split(' ').join(''));
      if(result===0) answer.push(line);
      return;
    }else{
      for(const sign of [" ", "+", "-"]){
        signArr.push(sign);
        dfs(signArr, depth+1);
        signArr.pop();
      }
    }
  }
  
  dfs([], 0)
  return answer.join('\n')
}

for(let t=0;t<N;t++){
  const num = Number(input[t+1]);
  console.log(solution(num))
  console.log();
}
