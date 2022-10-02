const solution = (n, f) => { 
  let answer = 0, flag=0;
  let dy = Array.from(Array(11), () => Array.from(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  // 조합 저장
  let b = Array.from({ length: n }, () => 0);
  const combi = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
  }
  
  const DFS = (L, sum) => { 
    if (flag) return;
    if (L === n && sum === f) { 
      answer = p.slice();
      flag = 1;
    }
    else { 
      for (let i = 1; i <= n; i++) { 
        if (ch[i] === 0) { 
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + (b[L] * p[L]));
          ch[i] = 0;
        }
      }
    }
  }

 
  // nC1->nCn구함.
  for (let i = 0; i < n; i++) { 
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}
console.log(solution(4, 16));
