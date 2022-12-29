/* 이진 변환 반복하기 */
// [이진변환 횟수, 변환과정에 제거된 모든 0의 개수]

const getCnt = (str) => {
  return str.split('').filter(el => el === '0').length;
}
const removeZero = (str) => {
  return str.replace(/0/g, '').length;
}
const convertTwo = (num) => {
  return num.toString(2);
}
const solution = (s) => {
  const answer = [0, 0]
  let str = s;
  while (true) {
    const zeroCnt = getCnt(str, 0);
    const oneCnt = removeZero(str);
    const numTwo = convertTwo(oneCnt);

    answer[0] += 1;
    answer[1] += zeroCnt;
    str = numTwo
    if (numTwo === "1") break;
  }
  return answer;
}

const s = "110010101001";
console.log(solution(s));