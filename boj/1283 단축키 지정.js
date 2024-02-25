/**
 * 1283 단축키 지정
 * 한개 또는 여러개 단어로 옵션의 기능을 설명함.
 * 위에서 차례대로 각 옵션에 단축키를 의미하는 대표 알파벳을 지정하기로 하였다.
 * 
 * 먼저 하나의 옵션에 대해 왼쪽에서부터 오른쪽 순서로 단어의 첫 글자가 이미 단축키로 지정되었는지 살펴본다. 만약 단축키로 아직 지정이 안 되어있다면 그 알파벳을 단축키로 지정한다.
 * 만약 모든 단어의 첫 글자가 이미 지정이 되어있다면 왼쪽에서부터 차례대로 알파벳을 보면서 단축키로 지정 안 된 것이 있다면 단축키로 지정한다.
 * 어떠한 것도 단축키로 지정할 수 없다면 그냥 놔두며 대소문자를 구분치 않는다.
 * 위의 규칙을 첫 번째 옵션부터 N번째 옵션까지 차례대로 적용한다.
 * 
 * 첫째 줄에 옵션의 개수 N(1 ≤ N ≤ 30)이 주어진다. 
 * 둘째 줄부터 N+1번째 줄까지 각 줄에 옵션을 나타내는 문자열이 입력되는데 하나의 옵션은 5개 이하의 단어로 표현되며, 각 단어 역시 10개 이하의 알파벳으로 표현된다. 
 * 단어는 공백 한 칸으로 구분되어져 있다.
 * 
 * 단축키로 지정된 알파벳은 좌우에 []를 붙여 표현
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'New',
'Open',
'Save',
'Save As',
'Save All',
]
const N = Number(input[0])
const INFO = input.slice(1);

const solution = (n, info) => {
  const duplicated = [];
  const answer = [];

  for(let t=0; t<n; t++){
    const cur = info[t]
    const upper = cur.toUpperCase();
    const origin = cur.split(' ');
    const upperList = upper.split(' ');
    let chk = false;

    for(let i=0;i<upperList.length;i++){
      const first = upperList[i][0];
      if(!duplicated.includes(first)){
        duplicated.push(first);
        origin[i] = `[${origin[i][0]}]${origin[i].slice(1)}`;
        chk = true;
        break;
      }
    }

    if(!chk){
      for(let i=0;i<upperList.length;i++){
        for(let j=0;j<upperList[i].length;j++){
          if(!duplicated.includes(upperList[i][j])){
            duplicated.push(upperList[i][j]);
            origin[i] = `${origin[i].slice(0, j)}[${origin[i][j]}]${origin[i].slice(j+1)}`
            chk = true;
            break;
          }
        }
        if(chk) break;
      }
    }
    answer.push(chk ? origin.join(' ') : cur);
  }
  return answer.join('\n')
}
console.log(solution(N, INFO))