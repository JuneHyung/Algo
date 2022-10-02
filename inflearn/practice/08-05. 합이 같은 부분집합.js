const solution = (arr) => { 
  let answer = "NO";
  let total = arr.reduce((arr, cur) => arr + cur, 0);
  let n = arr.length;
  let flag = false;
  const DFS = (L, S) => { 
    if (flag) return;
    if (L === n) { 
      if (total - S === S) { answer = 'YES'; flag=true}
    }
    else { 
      DFS(L + 1, S + arr[L]);
      DFS(L + 1, S);
    }
  }
  DFS(0, 0);
  return answer;
}
let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));