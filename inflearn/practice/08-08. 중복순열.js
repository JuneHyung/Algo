const solution = (n, m) => { 
  let cnt = 0;
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  const DFS = (L) => { 
    if (L === m) {
      answer.push(tmp.slice());
      // return;
    }
    else { 
      for (let i = 1; i <= n; i++) { 
        tmp[L] = i;
        DFS(L+1);
      }
    }
  }
  DFS(0) 
  return answer;
}


console.log(solution(4, 3));