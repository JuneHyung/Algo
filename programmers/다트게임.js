/*
S : 1 , D: 2, T: 3 제곱
* : 바로전 점수를 2배 >> * * : 4배가됨
# : 마이너스됨.
*  # : -2배됨.

1S*2T*3S	= 11 * 2 * 2 + 23 * 2 + 31
1D#2S*3S	=	12 * (-1) * 2 + 21 * 2 + 31

*/
function solution(dartResult) {
  let score = [];
  let len = dartResult.length;
  let tmp = ''

  for (let i = 0; i < len; i++) {
    if (/[0-9]/.test(dartResult[i])) {
      tmp += dartResult[i];
    } else {
      switch (dartResult[i]) {
        case 'S':
          score.push(Math.pow(tmp, 1));
          tmp = '';
          break;
        case 'D':
          score.push(Math.pow(tmp, 2));
          tmp = '';
          break;
        case 'T':
          score.push(Math.pow(tmp, 3));
          tmp = '';
          break;
        case '#':
          score[score.length - 1] *= -1;
          break;
        case '*':
          score[score.length - 1] *= 2;
          score[score.length - 2] *= 2;
          break;
      }
    }
  }
  let answer = 0;
  score.forEach(el => {
    answer += el;
  })
  return answer;
}