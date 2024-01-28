/**
 * 전화번호 목록
 * 한 번호가 다른 번호의 접두사인 경우 false 아니면 true 리턴
 */

const solution = (phone_book) => {
  const len = phone_book.length;
  phone_book.sort()
  for(let i=0;i<len-1;i++){
    const cur = phone_book[i];
    const next = phone_book[i+1];
    if(next.startsWith(cur)) return false;
  }
  return true;
};
// const phone_book = ["97674223", "119", "1195524421"]
const phone_book = ["123","13243","12435","124567","88"]
// const phone_book = ["123", "456", "789"];
console.log(solution(phone_book));
