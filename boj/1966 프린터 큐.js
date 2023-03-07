/**
 * 1966 프린터 큐
 * 현재 queue의 가장 앞에 있는 문서의 '중요도'를 확인한다.
 * 남은 문서들 중 현 문서보다 중요도가 높은 문서가 하나라도 있으면, 
 * 이 문서를 인쇄않고, Queue의 가장 뒤에 배치.
 * 아니면 바로 인쇄
 * [a,b,c,d], 중요도 [2, 1, 4,3]이면, C D A B를 인쇄함.
 * 어떤 문서가 몇번째로 인쇄되는지 알아내자.
 * 
 * 문서개수 N, target이 어딧는지 M
 * 그다음줄에 문서의 중요도가 나타내진다.
 * 중요도는 1~9
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'1 0',
'5',
'4 2',
'1 2 3 4',
'6 0',
'1 1 9 1 1 1',
]
// const input = [
//   '1',
// '4 2',
// '1 2 3 4',
// ]
const T = Number(input.shift())

const solution = (n, m, arr) => { 
  const queue = arr.map((el, idx) => { return [idx, el] });

  let answer = 1;
  while (true) { 
    const isHigh = queue.filter(el => el[1] > queue[0][1]).length === 0;
    // console.log(`f : ${isHigh} ${queue[0]}`);
    
    // 남은 문서들 중 현 문서보다 중요도가 높은 문서가 하나라도 있으면,
    // 이 문서를 인쇄않고, Queue의 가장 뒤에 배치.
    if (queue[0][0] === m && isHigh) break;
    else if (!isHigh) {
      queue.push(queue.shift());
    } else { 
      queue.shift();
      answer++;
    }
  }
  return answer;
}

for (let t = 0; t < T; t++) { 
  const [N, M] = input.shift().split(' ').map(Number)
  const ARR = input.shift().split(' ').map(Number)

  console.log(solution(N, M, ARR))
}