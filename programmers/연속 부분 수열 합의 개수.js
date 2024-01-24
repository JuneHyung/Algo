/**
 * 원형수열의 모든 원소가 주어졌을 떄 합으로 만들 수 있는 개수를 리턴
 */
const solution= (elements) => {
  const answer = new Set;
  const len = elements.length;
  for(let i=1;i<=len;i++){
    let sum = 0;
    for(let j=0;j<len;j++){
      if(j===0){
        const arr = elements.slice(0, i);
        sum+= arr.reduce((a,c)=>a+c,0)
      } else{
        sum -= elements[j-1];
        sum += elements[(j+i-1)%len]
      }
      answer.add(sum);
    }
  }
  return answer.size;
}

const elements = [7,9,1,1,4];
console.log(solution(elements))
