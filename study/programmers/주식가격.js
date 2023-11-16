/**
 * 주식가격
 * 초 단위로 기록된 주식가격이 담긴 prices가 주어질 떄 가격이 떨어지지 않은 기간은 몇초인지 return
 */
const solution = (prices) => {
  const n = prices.length;
  let stack = [];

  for(let i=0;i<n;i++){
    let s = 0;
    for(let j=i+1;j<n;j++){
      s++;
      if(prices[i] > prices[j]) break;
    }
    stack.push(s);
  }
  return stack
}


const prices = [1, 2, 3, 2, 3]
console.log(solution(prices))