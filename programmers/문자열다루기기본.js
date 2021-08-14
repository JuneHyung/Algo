function solution(s) {
    let answer = true;
    if (s.length == 4 || s.length == 6) {
        /^[0-9]*$/.test(s) ? answer = true : answer =false
    } else {
        answer = false;
     }
    return answer;
}
let s = '1034';
console.log(solution(s));