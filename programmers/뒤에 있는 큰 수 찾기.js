/**
 * 뒤에 있는 큰 수 찾기
 * 
 */ 
const solution = (numbers) => {
  const answer = [];
  const stack = [];
  while(numbers.length){
    if(stack.length===0){
      answer.push(-1);
      stack.push(numbers.pop())
    }else{
      const sLast = stack.pop();
      const nLast = numbers.pop();
      if(sLast > nLast){
        answer.push(sLast);
        stack.push(sLast)
        stack.push(nLast)
      }else{
        numbers.push(nLast)
      }
    }
  }
  return answer.reverse();
}
const numbers = [2,3,3,5];
// const numbers = [9, 1, 5, 3, 6, 2];
console.log(solution(numbers))