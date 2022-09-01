// 회문문자열 = 앞에서 읽을때나 뒤에서 읽을때나 같은 문자열
const solution = (str) => {
    let target = str.toLowerCase().split('');
    const answer = target.join('') === target.reverse().join('') ? 'YES' : 'NO';
    return answer;
}

// let str = "gooD";
let str = "gooD";
console.log(solution(str));


// const solution2 = (s) => {
//     s = s.toLowerCase();
//     const len = s.length;
//     for (let i = 0; i < Math.floor(len / 2); i++) {
//         if (s[i] != s[len - i - 1]) return "NO";
//     }
//     return "YES";
// }
// console.log(solution2(str));