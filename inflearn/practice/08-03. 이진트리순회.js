
// 좌 - 부모*2
// 우 - 부모*2+1

// 전위 - 부 왼 오
// 중위 - 왼 부 오
// 후위 - 왼 오 부
const solution = (v) => { 
  let answer = '';
  const DFS = (v) => { 
    if (v>7) { return; }
    else { 
      // console.log(v) // 전위
      DFS(v*2);
      // console.log(v) // 중위
      DFS(v * 2 + 1);
      console.log(v) // 후위
    }
  }
  DFS(1);
}
console.log(solution(1));