/**
 * 2343 레슨
 * 블루레이에 N개 강의가 있다.
 * 녹화 시 순서가 바뀌면 안된다.
 * ㅣM개의 블루레이에 모든 기타 강의 동영상을 녹화하기로 했다.
 * 블루레이 크기(녹화 가능한 길이)를 최소ㅎ로 하려한다.
 * M개 블루레이는 모두 같은 크기어야 한다.
 * 가능한 블루레이의 크기 중 최소를 구하는 프로그램 작성.
 * 
 * 가능한 블루레이 크기 중 최소를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '9 3',
'1 2 3 4 5 6 7 8 9',
]
const [N, M] = input.shift().split(' ').map(Number)
const INFO = input.shift().split(' ').map(Number)

const solution = (n, m, info) =>{
  let lt = 1;
  let rt = info.reduce((a,c)=>a+c, 0);
  let answer = Number.MAX_SAFE_INTEGER;
  while(lt<=rt){
    const mid = Math.floor((lt+rt)/2); // 블루레이 크기
    let cnt = 1;
    let sum = 0;
    for(let i=0;i<info.length;i++){ //처음부터 끝까지 돌면서
      if(info[i] > mid){ // 블루레이 크기보다 크면
        cnt = Number.MAX_SAFE_INTEGER;
        break;
      }
      if(sum + info[i] <= mid){ // 합쳐나가면서 블루레이 크기보다 작거나 같으면
        sum+=info[i]
      }else{ // 블루레이 크기보다 커지면 갯수 증가.
        cnt++;
        sum = info[i];
      }
    }

    if(cnt <= m){ // 갯수가 주어진 m보다 작으면 rt줄이고, 정답 갱신
      rt = mid-1;
      answer = Math.min(answer, mid);
    }else{ // 갯수가 주어진 m보다 크면 
      lt = mid+1;
    }
  }
  return answer;
}
console.log(solution(N, M ,INFO))