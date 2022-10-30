/**
 * https://velog.io/@longroadhome/프로그래머스-LV.4-선입-선출-스케줄링-JS
 * 0 : 1 2 3 | 3
 * 1 : 1     | 4
 * 2 : 1 2   | 6
 * 3 : 1   3 | 8
 * 4 : 1 2   | 10
 * 5 : 1     | 11
 * 
 */


function solution(n, cores) {
  const coreLen = cores.length;
  // var의 키워드가 let보다 빠르기 때문에 효율성통과를 위해 var로 선언. 
  // n을 그대로 활용해서 별도의 변수 선언없이 사용해도 가능.
  var rest = n - coreLen; // 처리할 나머지 일 개수
  let lt = 1; // 최소
  let rt = Math.max(...cores) * rest / coreLen // 최대

  while(lt<rt){
    const mid = Math.floor((lt+rt) / 2);
    let capacity = 0;
    for(const core of cores){
      capacity += Math.floor(mid / core);
    }
    capacity >=rest ? rt = mid : lt = mid+1;
  }
  
  for(const core of cores){
    rest -= Math.floor((rt-1)/core);
  }

  // 남은 rest수는 코어 개수를 초과할 수 없다.
  // 위에서 현재 시간대에 처리할 수 있는 rest만 남겼다.
  // 그렇기 때문에 코어개수만큼만 반복.
  for(let i=0;i<coreLen;i++){
    if(rt%cores[i]===0) {
      rest -= 1; // 새 작업을 할당하기 때문에 작업수 -1
      if(!rest){ // 남은 작업이 0이 되면
        return i+1; // 그때 인덱스를 반환.
      }
    }
  }
}

const n = 6;
const cores = [1,2,3];
console.log(solution(n, cores));