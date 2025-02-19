/**
 * 3003 킹, 퀸, 룩, 비숍, 나이트, 폰
 * 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성
 * 발견한 흰색피스가 주어졌을때 몇개를 더하거나 빼야하는지 구하기.
 * 
 * 킹 퀸 룩 비숍 나이트 폰 개수가 주어지며 0~10의 정수.
 * 
 */
// const fs=require('fs');
// const input=fs.readFileSync('/dev/stdin').toString().trim()
const input = `0 1 2 2 2 7`;
const info = input.split(' ').map(Number);
const solution = (info) => {
  const fixedPieceList = [1, 1, 2, 2, 2, 8];
  const whitePieceList = info.map((el, idx)=>fixedPieceList[idx]-el);
  const result = whitePieceList.join(' ');
  return result;
}

console.log(solution(info));

