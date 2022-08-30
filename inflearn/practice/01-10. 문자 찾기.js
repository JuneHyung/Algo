
const solution = (s, t) =>{
    const answer = s.split('').filter(el=>el===t).length;
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));