/**
 * 두 큐 합 같게 만들기
 * 길이가 같은 두 큐에서 하나의 큐를 고랄 원소를 추출하고, 추출된 원소를 다른 큐에 집어 넣는 작업을 통해 각 큐의 원소합이 같게하려한다.
 * 이때 최소작업횟수를 구하자. pop과 insert합쳐서 1회수해한것임.
 */

const solution = (queue1, queue2) => {
  const len = queue1.length;
  const queue = [...queue1, ...queue2];
  let target = queue.reduce((a,c)=>a+c, 0)/2;
  let st = 0;
  let ed = len;
  let cnt = 0;

  let sum = queue.slice(st, ed).reduce((a,c)=>a+c, 0);

  while(cnt<=len*2+2){
    console.log(sum , cnt, len*2+2)
    if(Number.isNaN(sum)) return -1; // 범위 넘어가면 
    if(sum===target){
      return cnt;
    }
    else if(sum<target){
      sum+=queue[ed];
      ed++;
    }else if(sum>target){
      sum-=queue[st];
      st++;
    }
    cnt++;
  }
  return -1;

}

const queue1 = [1, 4]
const queue2 = [4, 8];
// const queue1 = [3, 2, 7, 2]
// const queue2 = [4, 6, 5, 1];
console.log(solution(queue1, queue2))

// 3 2 7 2         / 4 6 5 1
// 3 2 7 2 4       / 6 5 1
// 3 2 7 2 4 6     / 5 1
// 3 2 7 2 4 6 5   / 1

// 3 2 7 2 4 6 5 1 / 
// 2 7 2 4 6 5 1   / 3
// 7 2 4 6 5 1     / 3 2
// 2 4 6 5 1       / 3 2 7

// 4 6 5 1         / 3 2 7 2
// 6 5 1           / 3 2 7 2 4
// 5 1             / 3 2 7 2 4 6
// 1               / 3 2 7 2 4 6 5

//                 / 3 2 7 2 4 6 5 1
// 3               / 2 7 2 4 6 5 1
// 3 2             / 7 2 4 6 5 1
// 3 2 7           / 2 4 6 5 1