/**
 * 27323 직사각형
 * 직사각형 넓이 구하기
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B] = input;

console.log(A*B)