/**
 * 4949 균형잡힌 세상
 * 모든 문자열이 균형이 잘 맞춰졌는지 판단하는 프로그램
 * 모든 왼쪽 소괄호("(")는 오른쪽 소괄호(")")와만 짝을 이뤄야 한다.
 * 모든 왼쪽 대괄호("[")는 오른쪽 대괄호("]")와만 짝을 이뤄야 한다.
 * 모든 오른쪽 괄호들은 자신과 짝을 이룰 수 있는 왼쪽 괄호가 존재한다.
 * 모든 괄호들의 짝은 1:1 매칭만 가능하다. 즉, 괄호 하나가 둘 이상의 괄호와 짝지어지지 않는다.
 * 짝을 이루는 두 괄호가 있을 때, 그 사이에 있는 문자열도 균형이 잡혀야 한다.
 * 
 * 문자열 마지막은 온점으로끝나고, 길이는 100글자 보다 작거나 같다.
 * 입력 종료는 온점
 * 
 * 균형을 이루면 yes 아니면 no
 */
/**
 * 한글자씩 반복하면서 괄호체크
 * 1. (, [ 면 push.
 * 2. ), ] 왔을 떄 빈 배열이면 no
 * 2-1. )일 떄, 빈 배열이면 no
 * 2-2. )일 떄, pop이 [ 이면 no
 * 2-3. ]일 떄, 빈 배열이면 no
 * 2-4. ]일 떄, pop이 ( 이면 no
 * 3. 다 돌고 남는게 있다면 no
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'So when I die (the [first] I will see in (heaven) is a score list).',
'[ first in ] ( first out ).',
'Half Moon tonight (At least it is better than no Moon at all].',
'A rope may form )( a trail in a maze.',
'Help( I[m being held prisoner in a fortune cookie factory)].',
'([ (([( [ ] ) ( ) (( ))] )) ]).',
' .',
'.',
]
const T = input.length;

const solution = (str) => {
  const len = str.length;

  const saved = [];
  
  for(let i=0;i<len;i++){
    const cur = str[i];
    
    // 1.
    if(cur==='(' || cur==='['){ 
      saved.push(cur);
    }
    
    // 2.
    if(cur===')'){
      if(saved.length===0) return 'no'; // 2-1.
      else{
        const pop = saved.pop(); // 2-2.
        if(pop==='[') return 'no';
      }
    }
    if(cur===']'){
      if(saved.length===0) return 'no'; // 2-3.
      else{
        const pop = saved.pop(); // 2-4.
        if(pop==='(') return 'no';
      }
    }

  }

  // 3.
  if(saved.length===0 ) return 'yes'; 
  else return 'no';
}

for(let t = 0; t<T;t++){
  if(input[t]==='.') break;
  const str = input[t].split('');
  console.log(solution(str));
}