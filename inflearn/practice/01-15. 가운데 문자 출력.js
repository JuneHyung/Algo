const solution = (str) => {
    const answer = str.length %2 ===0 ? `${str[Math.ceil(str.length/2)]}${str[Math.ceil(str.length/2)]}` : str[Math.ceil(str.length/2)-1] ;
    return answer;
}

// const word = "study"; // u
const word = "good"; // oo
console.log(solution(word));