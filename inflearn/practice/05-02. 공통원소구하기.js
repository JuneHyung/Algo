
const solution = (arr1, arr2) =>{
  let answer = [];
  for(let i=0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i])===-1) continue;
    else{
      answer.push(arr1[i]);
    }
  }
  return answer.sort();
}            
let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
