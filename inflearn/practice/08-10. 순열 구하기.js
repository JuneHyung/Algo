const solution = (m, arr) => { 
  let answer = [];
  let n = arr.length;
  let chk = Array.from({ length: arr.length }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  const DFS = (L) => { 
    if (L===m) {
      answer.push(tmp.slice());
    } else { 
      for (let i = 0; i < n; i++) { 
        if (chk[i] === 0) { 
          chk[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          chk[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}
let arr=[3, 6, 9, 5];
console.log(solution(2, arr));