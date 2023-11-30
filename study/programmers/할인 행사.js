/**
 * 할인 행사 
 * 하루에 하나씩만 구매할 수 있따. 
 * 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치하는 경우 회원가입하려한다.
 * 원하는 제품 want, 제품의 수량 number, 할인제품문자열 discount
 * 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수
 * 1 ≤ want의 길이 = number의 길이 ≤ 10
 * 1 ≤ want의 원소의 길이, discount의 원소의 길이 ≤ 12
 * */
function solution(want, number, discount) {
  let answer = 0;
  const wn = want.length;
  const dn = discount.length;

  // wannabe 초기화
  const initWannabe = () => {
    const result = {}
    want.forEach((w, i)=>{
      result[w] = number[i]
    })
    return result;
  }
  
  // 가능 여부 체크
  const checkPossible = (arr, wannabe) =>{ 
    for(let i =0; i<10;i++){
      const key = arr[i];
      if(wannabe.hasOwnProperty(key)){
        wannabe[key]-= 1
      }
    }
    return Object.values(wannabe).filter(el=>el>0).length!==0 ? false : true;
  }

  for(let i=0;i<dn-9;i++){
    const target = discount.slice(i, i+10);
    const targetCnt = new Set(target).size; // slice 배열값 종류
    if(wn!==targetCnt) continue; // 종류 개수 다르먄 다음날로 이동
    else{
      const wannabe = initWannabe(); // {want값 : number값}
      const possible = checkPossible(target, wannabe);
      if(possible) answer+=1;
    }
  }

  return answer;
}

// const want = ["banana", "apple", "rice", "pork", "pot"]
// const number = [3, 2, 2, 2, 1]
// const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
const want = ["apple"]
const number = [10]
const discount = ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]

console.log(solution(want, number ,discount))