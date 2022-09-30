// const makeBoss = (alpha) =>{
//   let obj = {};
//   for(let i=0;i<alpha.length;i++){
//     obj[alpha[i]] = 0;
//   }
//   return obj;
// }

// const solution = (s) =>{
//   let alpha = [...new Set(s.split(''))].sort();
  
//   let boss = makeBoss(alpha)
//   for(let i=0;i<s.length;i++){
//     boss[s[i]] += 1;
//   }
//   const values = Object.values(boss);
//   const keys = Object.keys(boss);
//   const max = Math.max(...values);
//   const index = values.indexOf(max);

//   const answer = keys[index];
  
//   return answer;
// }

// Map객체 사용
const solution = (alpha) => { 
  let answer = 0;
  let sH = new Map();
  for (let x of alpha) { 
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  // console.log(sH);
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) { 
    // console.log(key, val)
    if (val > max) { 
      max = val;
      answer = key;
    }
  }
  return answer;
}
let str="BACBACCACCBDEDE";
console.log(solution(str));