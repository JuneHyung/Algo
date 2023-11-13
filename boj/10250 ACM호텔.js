/**
 * 10250 ACM 호텔
 * 손님이 오는대로 빈방배정하고 있다.
 * 정문으로부터 걸어서 가장 짧은 거리 방을 선호함.
 * 각층 W개 방에 H층 건물.
 * 엘베는 가장 왼쪽에 존재.
 * 걷는거리가 같다면 아래층 방을 선호한다.
 * 
 * H, W, N이 주어진다.
 * N번쨰 손님이 어디에 배정되는지 구하시오.
 */
// const fs = requier('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
'6 12 10',
'30 50 72',
]
const T = Number(input.shift())

const solution = (h, w, n) => {
  const hotel = Array.from({length: h},(_,hi)=>Array.from({length:w},(_,wi)=>`${hi+1}${wi<9? '0'+(wi+1) : wi+1}`));
  for(let i=0;i<w;i++){
    for(let j=0;j<h;j++){
      n--;
      if(n===0) return hotel[j][i];
    }
  }
}
for(let t= 0;t<T;t++){
  const [H, W, N] = input[t].split(' ').map(Number);
  console.log(solution(H, W, N))
}