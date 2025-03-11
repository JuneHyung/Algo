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



const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(input[0]);
const numList = input[1].split(' ').map(Number);

const solution = (n, numList) => {

}

console.log(solution(N, numList))