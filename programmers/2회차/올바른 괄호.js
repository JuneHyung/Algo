const solution = (s) => {
  // const LEFT = '(';
  // const RIGHT = ')';
  if(s.length===1) return false;
  if(s[0]===')') return false;

  s = s.split('')
    
  let answer = true;
  const stack = [];

  for(let i=0;i<s.length;i++){
    if(s[i]==='(') stack.push(s[i])
    else if(stack.length===0 || stack.pop()===')') answer = false;
  }

  answer = stack.length===0 ? true : false
  return answer ;
}