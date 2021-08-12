function solution(s) {
    const answer = s.split(" ")
        .map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
        .join(' ');

    return answer;
}
let s = "3people unFollowed me";
console.log(solution(s));