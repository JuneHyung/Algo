const count = (stable, dist) => { 
  let cnt = 1, ep = stable[0];
  for (let i = 1; i < stable.length; i++) { 
    if (stable[i] - ep >= dist) { 
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
const solution = (c, stable) => { 
  stable.sort((a, b) => a - b)
  
  let lt = 1, rt = stable[stable.length - 1];
  while (lt <= rt) { 
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else { 
      rt = mid - 1;
    }
  }
  return answer;
}

// let arr=[1, 2, 8, 4, 9];
let arr=[5, 6, 8, 12, 14];
console.log(solution(3, arr));