/**
 * 25501 재귀의 귀재
 * 팰린드롬이란, 앞에서부터 읽었을 때와 뒤에서부터 읽었을 때가 같은 문자열
 * 팰린드롬의 예시로 AAA, ABBA, ABABA 등이 있고, 
 * 팰린드롬이 아닌 문자열의 예시로 ABCA, PALINDROME 등이 있다
 * 
 * 팰린드롬의 판별은 재귀를 이용할 수있다.
 * 작성된 isPalindrome함수를 이용해 팰린드롬여부를 판단하려한다.
 * 
 * 첫줄 테케 수T
 * 둘줄 문자열S 
 * 팰린드롬의 반환값과 reecursion함수의 호출횟수르 하줄에 공백으로 구분하여 출력
 * 
 * 
 */
/**
 * recursion함수에 cnt를 추가하여 마지막에 join으로 리턴.
 * 
 * 어떻게 판별하는가?
 * 1. 문자열과, 가장 첫번째(좌)와 끝(우)을 시작으로
 * 2. 2개가 같은지 비교.
 * 3. 같다면 좌+1, 우-1 하며 다시 recursion함수를 호출해 비교.
 * 4. 중간에 만나게 된다면, 끝까지 비교를 완료했으니 1 중간에 다르다면 0을 리턴.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input =
  [
    '5',
    'AAA',
    'ABBA',
    'ABABA',
    'ABCA',
    'PALINDROME',
  ]
const T = Number(input[0])
const solution = (str) => {
  const recursion = (s, l, r, cnt) => {
    if (l >= r) return [1, cnt];
    else if (s[l] !== s[r]) return [0, cnt];
    else return recursion(s, l + 1, r - 1, cnt + 1);
  }

  const isPalindrome = (str) => {
    return recursion(str, 0, str.length - 1, 1);
  }

  return isPalindrome(str).join(' ');
}

for (let t = 1; t <= T; t++) {
  const STR = input[t];
  console.log(solution(STR))

}
