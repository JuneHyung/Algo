const solution = (k, tangerine) => {
  let answer = 0;
  let box = {};
  tangerine.forEach(el => { 
    if (box.hasOwnProperty(el)) { 
      box[el] += 1;
    } else {
      box[el] = 1;
    }
  })
  const result = Object.entries(box).sort((a, b) => b[1]- a[1])
  
  for (let i = 0; i < result.length; i++) { 
    const [key, value] = result[i];
    k -= value;
    answer++;
    if (k <= 0) break;
  }
  return answer;
}

let k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3]; // 3
console.log(solution(k, tangerine))