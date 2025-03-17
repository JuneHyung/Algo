/**
 * 4779 칸토어 집합
 * 칸토어 집합은 0과 1사이 실수로 이루어진 집합.
 * 구간 [0, 1]에서 시작해서 각 구간을 3등분하여 가운데 구간을 반복적으로 제외하는 방식으로 만든다
 * 다음 과정을 통해 칸토어 집합의 근사를 만들자.
 * 
 * 1. -가 3N개 있는 문자열에서 시작한다.
 * 2. 문자열을 3등분 한 뒤, 가운데 문자열을 공백으로 바꾼다. 이렇게 하면, 선(문자열) 2개가 남는다.
 * 3. 이제 각 선(문자열)을 3등분 하고, 가운데 문자열을 공백으로 바꾼다. 이 과정은 모든 선의 길이가 1일때 까지 계속 한다.
 * 
 * N이 주어졌을 떄 마지막 과정이 끝난 후 결과를 출력하는 프로그램 작성
 */
/**
 * 1. 3의 n승길이만큼 '-' 배열 생성
 * 2. cantor()함수 재귀 : 배열을 3등분 해서 left와 right는 다시 cantor mid는 공백으로 변환
 * 3. 마지막 join해서 return
 */
// const fs = reuquire('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '0',
'1',
'3',
'2',
]
const numList = input.map(Number);

const solution = (n) => {
  const arr = Array.from({length: Math.pow(3, n)}, ()=>'-');
  const cantor = (str) => {
    if(str.length===1) return str;
    const len = str.length/3;

    const left = cantor(str.slice(0, len));
    const mid = str.slice(len, len+len).map(()=>' ');
    const right = cantor(str.slice(len+len));
    
    return [...left, ...mid, ...right].join('')
  }
  const result = n===0 ? '-' : cantor(arr);
  return result;
}

for(const num of numList){
  console.log(solution(num))
}
