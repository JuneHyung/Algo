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

  for(let i=0;i<coreLen;i++){
    if(rt%cores[i]===0) {
      rest -= 1;
      if(!rest){
        return i+1;
      }
    }
  }
}

const n = 6;
const cores = [1,2,3];
console.log(solution(n, cores));