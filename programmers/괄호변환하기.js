
// 균형잡힌 : ()개수 같은거
// 올바른 : ()가 옳게 닫힌거
function solution(p) {
  let chk = 0;
  let u = '';
  let v = '';
  let flag = true;
  if (p.length == 0) return '';
  else {
    // 2단계
    for (let i = 0; i < p.length; i++) {
      switch(p[i]){
        case '(':
          u += p[i];
          chk++;
          break;
        case ')':
          u += p[i];
          chk--;
          if (chk < 0) flag = false;
          break;
      }
      if (chk == 0) {
        v = p.substring(i + 1);
        break;
      }
      // console.log(`chk:${chk}`);
    }
    console.log(`u: ${u} , v:${v}`);

    // 3단계 : 올바른이면, v에 대해 1단계부터.
    // 3-1. 수행결과 문자열을 u에 이어붙여 반환
    if (flag) return u += solution(v);
    // 4단계
    else {
      // 4-1,4-2,4-3 : 앞뒤로 ()붙이고, v에대해 1단계부터 수행한거 반환
      let tmp = '(' + solution(v) + ')';
      // 4-4. u의 첫 마지막 문자제거. 
      u = u.substring(1, u.length - 1);
      
      // 나머지 문자열 뒤집기
      tmp += u.split('').map(el => { return el == '(' ? el = ')' : el = '('}).join('')
      // 4-5. 반환.
      return tmp;
    }
  }
}
let p = "()))((()";
console.log(solution(p));
