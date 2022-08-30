const solution =  (str) => {
    const answer = [...new Set(str)].join(' ')
    return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));