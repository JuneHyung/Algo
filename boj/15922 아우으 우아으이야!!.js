/**
 * 15922 아우으 우아으이야!!
 * 선분을 여러개 그릴거 야아앙ㅇ아아아ㅏㅏ아아ㅏㅏ!!
 * 선분을 모두 그렸을 때, 수직선 위에 그려진 선분 길이의 총합은 얼마아아으으우어으이으야이야!!!
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5',
'-5 -2',
'-3 0',
'2 5',
'6 10',
'8 12',
]
// const input = [
//   '2',
//   '-1000000000 1000000000',
//   '-1 1',
// ]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, info) => {
  info.sort((a,b)=>a[0] - b[0])

  let answer = 0;
  let [st, ed] = info[0];
  for(let i=1;i<n;i++){
    const [nst, ned] = info[i];

    if(st===nst){
      ed = ned;
    } else if(ed >= nst && ned>ed){
      ed = ned;
    }
    else if(ed < nst){
      answer += Math.abs(st-ed);
      st = nst;
      ed = ned;
    }
  }
  return answer + (ed-st)
}

console.log(solution(N, INFO))