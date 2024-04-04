function solution(X, Y) {
  var answer = '';
  let aboutX = [...X];
  let aboutY = [...Y];
  
  for(let i=9;i>=0;i--){
    const xCnt = aboutX.filter(el=>el===i.toString()).length;
    const yCnt = aboutY.filter(el=>el===i.toString()).length;
    const min = Math.min(xCnt, yCnt);
    for(let j=0;j<min;j++){
      answer += i.toString();
    }
  }
  return answer.length===0 ? "-1" : answer.match(/[^0]/g) === null ? "0" : answer.toString();
}
const X = "12321";
const Y = "42531";
console.log(solution(X, Y));