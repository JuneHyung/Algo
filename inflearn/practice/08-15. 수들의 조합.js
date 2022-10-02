const solution = (n, k, arr, m) => {
  let answer = 0;
  const tmp = Array.from({ length: k });
  const DFS = (L, s, sum) => { 
    if (L === k) {
      if (sum % m === 0) answer++;
      console.log(sum, tmp)
    }
    else { 
      for (let i = s; i < n; i++) { 
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));


