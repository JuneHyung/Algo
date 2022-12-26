/**
 * routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, 
 * routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
 * 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
 * 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하
 */

/**
 * 이전 차량 end < 현재 차량 start
 * 카메라 추가
 * end = 현재 차량 start
 * 
 * 이전 차량 end > 다음 차량 end
 * end = 현차량의 end
 */

const solution = (routes) => {
  let answer = 1;
  
  routes.sort((a,b)=> a[0]-b[0])
  console.log(routes)
  let end = routes[0][1];
  for(let i=1; i<routes.length;i++){
    const curStart = routes[i][0];
    const curEnd = routes[i][1];
    // console.log(end, curStart, curEnd);
    if(end < curStart){
      answer++;
      end = curEnd;
      // console.log('end>curStart');
      // console.log(answer);
      // console.log(end);
    }
    if(end > curEnd){
      end = curEnd;
      // console.log('end>curEnd');
      // console.log(end)
    }
  }
  return answer;
}

const routes = [[-20,-15], [-14,-5], [-18,-13], [-5,-3]];
console.log(solution(routes))