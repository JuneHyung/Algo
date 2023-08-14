/**
 * 1706 크로스워드
 * rxc표에 금지된 칸을 제외하고 각 칸에 알파벳이 하나씩 적혀있다.
 * 세로또는 가로로 연속되있고, 더이상 확장할 수 없는 낱말이 퍼즐내에 존재하는 단어가 된다.
 * 다 푼 퍼즐이 주어졌을 때 퍼즐 내에 존재하는 모든 낱말 중 사전순으로 가장 앞에있는 낱말구하기.
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4 5',
'adaca',
'da##b',
'abb#b',
'abbac',
]
const [R, C] = input.shift().split(' ').map(Number)
const GRAPH = input.map(el=>el.split(''));

const solution = (r, c, graph) => {
  const dictionary = new Set();

  // 세로로
  for(let j=0;j<c;j++){
    let str = '';
    for(let i=0;i<r;i++){
      if(graph[i][j]==='#'){
        if(str.length>1) dictionary.add(str);
        str='';
      }else{
        str+=graph[i][j]
      }
    }
    if(str.length>1) dictionary.add(str);
    str = ''
  }

  // 가로로
  for(let i=0;i<r;i++){
    let str = ''
    for(let j=0;j<c;j++){
      if(graph[i][j]==='#'){
        if(str.length>1) dictionary.add(str);
        str='';
      }else{
        str+=graph[i][j]
      }
    }
    if(str.length>1) dictionary.add(str);
    str = ''
  }

  // 케로로
  const answer = [...dictionary].sort((a,b)=> {
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
  });

  return answer[0];
}

console.log(solution(R, C, GRAPH))