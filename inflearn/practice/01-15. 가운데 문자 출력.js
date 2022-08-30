const solution = (str) => {
    const answer = str.length %2 ===0 ? `${str[Math.ceil(str.length/2)]}${str[Math.ceil(str.length/2)]}` : str[Math.ceil(str.length/2)-1] ;

    // const mid = Math.floor(str.length/2);
    // const answer = str.length %2 === 0 ? str.substr(mid-1, 2) : str.substr(mid, 1) 
    return answer;
}

// const word = "study"; // u
const word = "good"; // oo
console.log(solution(word));