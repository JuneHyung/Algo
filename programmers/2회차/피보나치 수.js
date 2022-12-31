const solution = (n) =>{
  let fibo = [0,1];
  for(let i=0;i<n-1; i++){
    let tmp = (fibo[i]+fibo[i+1])%1234567;
    fibo.push(tmp)
    console.log(fibo);
  }
  return fibo[n]
}

let n = 5;
console.log(solution(n));