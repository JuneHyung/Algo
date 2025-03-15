/**
 * 2346 풍선 터뜨리기
 * 
 * 1~N까지 N개 풍선이 원형으로 놓여있다.
 * 풍선 안에는 종이가있고, -N보다 크거나 같고 N보다 작거나 같은 정수가 있다.
 * 
 * 1번 터뜨린다. 그다음 종이를 꺼내 종이에 적힌 값 만큼 이동해 풍선을 터뜨린다.
 * 양수면 우, 음수면 좌 이동 시 이미 터진풍선은 뺴고 이동.
 * 
 * 첫줄 N
 * 둘줄 풍선안에 적힌 종이 수. 0은없다.
 * 
 * 첫쨰줄에 터진 풍선의 번호를 차례로 나열
 *  
 */
/**
 * 풍선idx와 num의 정보를 기억하는 ballons배열 생성
 * 결과담을 result
 * 현재위치 나타낼 cur
 * 
 * 반복 - ballons가 빌 때까지
 * 1. cur위치의 값 자르기.
 * 2. idx를 result에 저장.
 * 3. ballons가 비면 중단
 * 4. value가 양수면 다음 위치는 cur + move - 1 % 남은 ballons길이 
 * 5. value가 음수면 다음 위치는 cur + move % 남은 ballons길이
 * 5-1. 다음위치값이 음수가되면 ballons길이만큼 더해줘서 양수로 만들기.
 * 6. result.join 
 */



// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'3 2 1 -3 -1',
]
const N = Number(input[0]);
const numList = input[1].split(' ').map(Number);

const solution = (n, numList) => {
  const balloons = numList.map((num,idx)=>[idx+1, num]);
  const result = [];
  let cur = 0;

  while(true){
    const [idx, move] = balloons.splice(cur, 1)[0];
    const len = balloons.length;
    result.push(idx);

    if(balloons.length===0)break;

    if(move>0){
      cur = (cur + move-1)% len;
    }else{
      cur = (cur+move)%len;
      if(cur<0) cur+=len;
    }
  }

  return result.join(' ')
}

console.log(solution(N, numList))

/**
 * 메모리 초과
 * 다른 JS제출자들 중에서도 통과자가 없는듯함.
 * GPT에게 JS코드를 Python으로 변환 요청.
 * 주석은 찾아서 넣기
 */
/**
 * enumerate : 리스트나 튜플을 반복하면서 해당 요소의 인덱스와 값을 동시에 반환하는 함수
 * 
 * fruits = ["apple", "banana", "cherry"]
 * 
 * for index, fruit in enumerate(fruits):
 *  print(index, fruit)
 * 
 * 0 apple
 * 1 banana
 * 2 cherry
 */
/**
 * strip() : 문자열 앞뒤 공백제거
 */
// def solution(n, num_list):
//     # [idx+1, num]형태로 ballons저장.
//     balloons = [[i + 1, num] for i, num in enumerate(num_list)]
//     result = []  
//     cur = 0  

//     while balloons:  # 풍선이 남아있는 동안 반복
//         idx, move = balloons.pop(cur)  # cur위치의 값을 제거하면서 그곳의 [번호, 이동값]을 가져옴.
//         result.append(idx)  

//         if not balloons: 
//             break
        
//         len_balloons = len(balloons)  # 남은 풍선의 개수

//         if move > 0:  
//             cur = (cur + move - 1) % len_balloons  
//         else: 
//             cur = (cur + move) % len_balloons 
//             if cur < 0: 
//                 cur += len_balloons  

//     return " ".join(map(str, result))  # resutl의 요소를 문자열로 변환해 ' '로 연결 (보는방식이 조금 다르네)


// # 입력 처리
// N = int(input().strip())  
// num_list = list(map(int, input().strip().split()))  
// print(solution(N, num_list)) 