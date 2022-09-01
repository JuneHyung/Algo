
//앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬
const solution = (str) => {
    let target = str.replace(/\W/g, '').toLowerCase()
    const answer = target.split('').join('') === target.split('').reverse().join('') ? "YES" : "NO"
    return answer;
}


let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));