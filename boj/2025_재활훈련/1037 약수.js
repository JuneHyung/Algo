/**
 * 1037 약수
 * A가 N의 진짜 약수가 되려면 N이 A의 배수고, A가 1과 N이아니어야한다.
 * 어떤 수 N의 진짜 약수가 모두 주어질 때 N을 구하는 프로그램 작성.
 * 
 * 첫줄 N의 진짜 약수 개수가 주어진다. (50보다 작은 자연수)
 * 둘줄에 N의 진짜 약수가 주어진다. 2~100만 중복없음.
 * 
 * 첫줄에 N을 출력한다.
 */
/**
 * 정렬해서 양끝 곱하기?
 */

// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '14',
  '14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596',
]
const CNT = Number(input[0])
const divisorList = input[1].split(' ').map(Number);

const solution = (cnt, divisorList) => {
  const arr = divisorList.sort((a,b)=>a-b);
  console.log(arr)
  const result = arr[0] * arr[arr.length-1];
  return result;
}

console.log(solution(CNT, divisorList))