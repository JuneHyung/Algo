/**
 * 13305 주유소
 * N개 도시가 일직선도로에 있다.
 * 제일 좌에서 제일 우로 자동차타고 이동하려한다.
 * 인접한 두 도시 사이ㅡ이 도로들은 길이가 다를 수 있다.
 * 
 * 처음에 자동차 기름을 넣고 출발해야한다.
 * 1km 마다 1리터 기름을 쓴다.
 * 각 도시에 주유소는 1개고 리터당 가격은 다르다.
 * 
 * 각 도시의 주유소 기름 가격과 연결하는 도로의 길이를 입력으로 받아 제일 좌에서 우로 이동하는 최소비용 계산.
 * 
 * N은 2~10만
 * 둘줄은  도로길이
 * 셋줄은 리터당 가격
 * 거리는 1 ~ 1_000_000_000
 * 가격은 1 ~ 1_000_000_000
 */
/**
 * 시작은 무조건 충전 -> 최대값으로 지정
 * 방문 가격이 현재 최소금액 보다 작으면 현재 최소 금액을 갱신.
 * 거리만 큼 곱하여 합산
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'2 3 1',
'5 2 4 1',
]
// 11
const N = Number(input[0]);
const DIST = input[1].split(' ').map(BigInt);
const PRICE = input[2].split(' ').map(BigInt);

const solution = (n, dist, price)=>{
  let result = 0n;

  let curPrice = Infinity;

  for(let i=0;i<n-1;i++){
    if(curPrice > price[i]) curPrice = price[i];
    result += dist[i]*curPrice;
  }
  return result.toString();
}

console.log(solution(N, DIST, PRICE));