const solution = (s) => { 
  let stack = [];
  for (let i = 0; i < s.length; i++) { 
    const target = s[i];
    // console.log(isNaN(target))
    if (!isNaN(target)) stack.push(Number(target));
    else { 
      let rt = stack.pop();
      let lt = stack.pop();
      switch (target) { 
        case '+':
          stack.push(lt+rt)
          break;
        case '-':
          stack.push(lt-rt)
          break;
        case '*':
          stack.push(lt*rt)
          break;
        case '/':
          stack.push(lt/rt)
            break;
      }
    }
  }
  return stack[0]
}

// 3*(5+2)-9
let str="352+*9-";
console.log(solution(str));