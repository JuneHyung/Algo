const makeBoss = (alpha) =>{
  let obj = {};
  for(let i=0;i<alpha.length;i++){
    obj[alpha[i]] = 0;
  }
  return obj;
}

const solution = (s) =>{  
  let alpha = [...new Set(s.split(''))].sort();
  
  let boss = makeBoss(alpha)
  for(let i=0;i<s.length;i++){
    boss[s[i]] += 1;
  }
  const values = Object.values(boss);
  const keys = Object.keys(boss);
  const max = Math.max(...values);
  const index = values.indexOf(max);

  const answer = keys[index];
  
  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));
       