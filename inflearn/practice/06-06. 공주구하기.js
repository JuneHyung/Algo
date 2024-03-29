const solution = (n, k) => { 
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  
  while (queue.length) { 
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) return queue.shift();
  }
}
console.log(solution(8, 3));