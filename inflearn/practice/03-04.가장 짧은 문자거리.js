const solution = (s, t) => {
    let answer = new Array(s.length).fill(Number.MAX_SAFE_INTEGER);
    let num = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            num = 0;
        } else {
            num++;
        }
        answer[i] = (Math.min(answer[i], num));
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            num = 0;
        } else {
            num++;
        }
        answer[i] = (Math.min(answer[i], num));
    }
    return answer;
}

let str = "teachermode";
console.log(solution(str, 'e'));