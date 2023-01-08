function solution(s) {
  let answer = 0;
  let arr =[...s];
  
  for(let i=0;i<arr.length;i++){
    let stack = [];
    for(let j=0;j<arr.length;j++){
      stack.push(arr[j]);

      if((stack[stack.length-2]==='(' && stack[stack.length-1]===')') || 
        (stack[stack.length-2]==='{' && stack[stack.length-1]==='}') || 
        (stack[stack.length-2]==='[' && stack[stack.length-1]===']')){
          stack.pop();
          stack.pop();
      }
    }
    if(stack.length===0) answer++;
    
    let first = arr.shift();
    arr.push(first);
  }
  return answer;
}

const s = "[](){}";
console.log(solution(s));