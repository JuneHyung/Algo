const solution = (need, plan) => { 
  let queue = need.split('');
  for (x of plan) { 
    if (queue.includes(x)) { 
      if (x !== queue.shift()) return "NO";
    }
  }

  return queue.length > 0 ? "NO" : "YES";
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));