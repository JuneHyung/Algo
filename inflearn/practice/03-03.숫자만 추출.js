const solution = (str) => {
    const answer = Number(str.replace(/\D/g, ''));
    // const answer = Number(str.replace(/[^0-9]/g, ''));도가능
    return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));