/**
 * 두 엄지 손가락을 이용하여 타이핑 하려한다.
 * 항상 좌엄지는 4, 우 엄지는 6위에 두고 시작.
 * 엄지를 움직여 다음 숫자를 누르는데에는 일정 시간이 든다.
 * 어떤 두 숫자를 연속으로 입력할때 시간 비용을 가중치로 분류
 * 
 * 이동하지 않고 제자리에서 다시 누르는 것 = 가중치 1
 * 상하좌우 인접한 숫자 = 가중치 2
 * 대각선 인접한 숫자 = 가중치 3
 * 같지않고, 인접하지 않은 숫자를 누를때는 위규칙에 따라 가중치 합이 최소가되는 경로를 따름.
 * 
 * 같은 버튼위에 두 엄지를 올려놓을 수는 없다.
 * 최소한의 시간으로 타이핑하는 겨웅 가중치 합을 return.map(Number)
 */
const thumb1 = {
  '1': 1,
  '2': 2,
  '3': 4,
  '4': 2,
  '5': 3,
  '6': 5,
  '7': 4,
  '8': 5,
  '9': 6,
  '*': 6,
  '0': 7,
  '#': 8,
}
const thumb2 = {
  '1': 2,
  '2': 1,
  '3': 2,
  '4': 3,
  '5': 2,
  '6': 3,
  '7': 5,
  '8': 4,
  '9': 5,
  '*': 7,
  '0': 6,
  '#': 7,
}
const thumb3 = {
  '1': 4,
  '2': 2,
  '3': 1,
  '4': 5,
  '5': 3,
  '6': 2,
  '7': 6,
  '8': 5,
  '9': 4,
  '*': 8,
  '0': 7,
  '#': 6,
}
const thumb4 = {
  '1': 2,
  '2': 3,
  '3': 5,
  '4': 1,
  '5': 2,
  '6': 4,
  '7': 2,
  '8': 3,
  '9': 5,
  '*': 4,
  '0': 5,
  '#': 6,
}
const thumb5 = {
  '1': 3,
  '2': 2,
  '3': 3,
  '4': 2,
  '5': 1,
  '6': 2,
  '7': 3,
  '8': 2,
  '9': 3,
  '*': 5,
  '0': 4,
  '#': 5,
}
const thumb6 = {
  '1': 5,
  '2': 3,
  '3': 2,
  '4': 4,
  '5': 2,
  '6': 1,
  '7': 5,
  '8': 3,
  '9': 2,
  '*': 6,
  '0': 5,
  '#': 4,
}
const thumb7 = {
  '1': 4,
  '2': 5,
  '3': 6,
  '4': 2,
  '5': 3,
  '6': 5,
  '7': 1,
  '8': 2,
  '9': 4,
  '*': 2,
  '0': 3,
  '#': 5,
}
const thumb8 = {
  '1': 5,
  '2': 4,
  '3': 5,
  '4': 3,
  '5': 2,
  '6': 3,
  '7': 2,
  '8': 1,
  '9': 2,
  '*': 3,
  '0': 2,
  '#': 3,
}
const thumb9= {
  '1': 6,
  '2': 5,
  '3': 4,
  '4': 5,
  '5': 3,
  '6': 2,
  '7': 4,
  '8': 2,
  '9': 1,
  '*': 5,
  '0': 3,
  '#': 2,
}
const thumb10 = {
  '1': 6,
  '2': 7,
  '3': 8,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 2,
  '8': 3,
  '9': 5,
  '*': 1,
  '0': 2,
  '#': 4,
}
const thumb11 = {
  '1': 7,
  '2': 6,
  '3': 7,
  '4': 5,
  '5': 4,
  '6': 5,
  '7': 3,
  '8': 2,
  '9': 3,
  '*': 2,
  '0': 1,
  '#': 2,
}
const thumb12 = {
  '1': 8,
  '2': 7,
  '3': 6,
  '4': 6,
  '5': 5,
  '6': 4,
  '7': 5,
  '8': 3,
  '9': 2,
  '*': 4,
  '0': 2,
  '#': 1,
}

const solution = (numbers) => {
  const switchThumb = (idx, cur) =>{
    switch(idx){
      case 1:
        return thumb1[cur];
      case 2:
        return thumb2[cur];
      case 3:
        return thumb3[cur];
      case 4:
        return thumb4[cur];
      case 5:
        return thumb5[cur];
      case 6:
        return thumb6[cur];
      case 7:
        return thumb7[cur];
      case 8:
        return thumb8[cur];
      case 9:
        return thumb9[cur];
      case '*':
        return thumb10[cur];
      case 0:
        return thumb11[cur];
      case '#':
        return thumb12[cur];
    }
  }
  
  const n = numbers.length;
  const dp = Array.from({length: n+1},()=>Array.from({length: 10},()=>Array.from({length:10},()=>Infinity)));
  
  dp[0][4][6] = 0;
  for(let t=0;t<n;t++){
    const num = numbers[t];
    const prev = dp[t];
    const cur = dp[t+1];
    for(let i=0;i<10;i++){
      for(let j=0;j<10;j++){
        const prevValue = prev[i][j];
        const fthumb = switchThumb(i, num);
        const sthumb = switchThumb(j, num);
        if(i===j || prevValue === Infinity) continue;
        if(cur[num][j] > prevValue + fthumb){
          cur[num][j] = prevValue + fthumb
        }
        if(cur[i][num]>prevValue + sthumb){
          cur[i][num] = prevValue + sthumb
        }
      }
    }
  }


  return Math.min(...dp[numbers.length].flat(3));
}

const numbers = '1756'
console.log(solution(numbers))