/**
 * 2941 크로아티아 알파벳
 * č	c=
 * ć	c-
 * dž	dz=
 * đ	d-
 * lj	lj
 * nj	nj
 * š	s=
 * ž	z=
 * 
 * 단어가주어지면 몇개의 크로아티아 알파벳으로 이루어져있는지 출력
 * dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.
 * 알파벳 소문자와 '-', '='로만 이루어져 있다.
 * 
 * 정규표현식 찾아봄
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = 'ljes=njak';
// const input = 'nljj';
// const input = 'dz=ak'
const solution = (word) => {
  const croatiaDictionary = [
    'c=', 
    'c-', 
    'dz=', 
    'd-', 
    'lj', 
    'nj', 
    's=', 
    'z='];

  for(const key of croatiaDictionary){
    while(word.includes(key)){
      const regex = new RegExp(key, 'i');
      word = word.replace(regex, '_');
    }
  }

  const result = word.length;
  return result;
}

console.log(solution(input));