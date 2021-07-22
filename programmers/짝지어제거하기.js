function solution(s)
{   
    let stack = [];
    
    for(let i=0; i<s.length; i++){
        if(stack[stack.length-1] != s[i]) stack.push(s[i]);
        else stack.pop();
    }
    console.log(stack)
    return stack.length!=0 ? 0 : 1;
}
 s = 'baabaa';
// const s = 'cdcd';
console.log(solution(s));