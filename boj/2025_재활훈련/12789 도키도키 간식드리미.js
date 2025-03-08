/**
 * 12789 도키도키 간식드리미
 * 
 * 첫 줄에 승환이 앞에 서 있는 학생 수 N (1~1000)
 * 둘 줄에 학생들의 번호표
 * 
 * 무사히 받을 수 있으면, Nice 아니면 Sad 출력.
 * 
 */
/**
 * 1. list 가 빌 때까지 반복.
 * 1-1. wait의 마지막 항목이 현재 순서와 같다면, wait에서 pop & 순서 +1
 * 1-2. wait의 마지막 항목이 현재 순서가 아니라면, list에서 pop
 * 1-3. list에서 pop한 것이 현재 순서라면, 순서 +1
 * 1-4. list에서 pop한 것이 현재 순서가 아니라면, wait에 push
 * 
 * 2. wait의 배열이 빌때 까지 반복
 * 2-1. wait의 마지막 항목이 현재 순서와 같다면 wait에서 pop & 순서 +1
 * 2-2. 아니면 순서가 안맞으니까 break
 * 
 * 3. wait에 남는 배열이 있다면 sad 아니면 nice
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
'6 4 2 1 3 5',
]
const N = Number(input[0])
const LIST = input[1].split(' ').map(Number).reverse();


const solution = (n, list) => {
  const wait = [];
  let idx = 1;

  // 1.
  while(list.length>0){ 
    const lastWait = wait[wait.length-1];
    if(lastWait===idx){ // 1-1.
      wait.pop();
      idx++;
      continue;
    }

    const cur = list.pop(); // 1-2. 
    if(cur===idx){ // 1-3. 
      idx++;
      continue;
    }else{ // 1-4.
      wait.push(cur);
    }
  }

  // 2.
  while(wait.length>0) {
    const lastWait = wait[wait.length-1];
    if(lastWait === idx){ // 2-1.
      idx++;
      wait.pop();
    }else break; // 2-2.
  }

  // 3.
  return wait.length>0 ? 'Sad' : 'Nice';
}

console.log(solution(N, LIST));