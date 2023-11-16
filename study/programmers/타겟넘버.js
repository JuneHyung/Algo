let answer = 0;

const solution = (numbers, target) => {

  const dfs = (sum, cur) =>{
    if(cur===numbers.length-1){
      if(sum===target) answer+=1;
      return;
    }

    const next = cur+1;
    dfs(sum+numbers[next], next)
    dfs(sum-numbers[next], next)
  }

  const first = numbers[0];

  dfs(first, 0);
  dfs(-1*first, 0);

  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target))