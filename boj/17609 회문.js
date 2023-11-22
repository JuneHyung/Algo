/**
 * 17609 회문
 * 앞뒤방향으로 볼떄 같은 순서의 문자로 구성된 문자열.
 * 한 문자를 삭제해서 회문이 된다면 유사회문이라 부른다.
 * 
 * 문자열이 회문이면 0, 유사회문이면1, 그 외는 2를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7',
'abba',
'summuus',
'xabba',
'xabbay',
'comcom',
'comwwmoc',
'comwwtmoc',
];
const T = Number(input.shift());

const checkSame = (str, lt ,rt) =>{
  while(lt < rt) {
    if(str[lt]===str[rt]){
      lt++;
      rt--;
    }else return false;
  }
  return true;
}

const isPalin = (str) => {
  let lt = 0;
  let rt =str.length-1;
  while(lt<=rt){
    if(str[lt] === str[rt]){
      lt++;
      rt--;
    }else{
      if(checkSame(str, lt+1, rt) || checkSame(str, lt, rt-1)) return 1;
      return 2;
    }
  }
  return 0;
}
const answer = [];
for(let t=0;t<T;t++){
  const str = input[t];
  const check = isPalin(str);
  answer.push(check);
}

console.log(answer.join('\n'))