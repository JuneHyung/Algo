const solution = (arr) => {
  const answer = arr.reduce((acc,cur) => acc.length < cur.length ? cur : acc)
  return answer;
}


let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str))