const solution = (arr) => { 
  const sorted = arr.slice().sort((a,b)=> a-b);
  console.log(arr, sorted)
  let answer = [];
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] !== sorted[i]) answer.push(i + 1);
  }
  return answer;
}
let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
// let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));
