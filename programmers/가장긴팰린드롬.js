function solution(s) {
    let len = s.length;
    for (let i = len; i > 0; i--) {
        for (let j = 0; j <= len-i; j++) {
            console.log(`j: ${j}, i: ${i}`)
            let chk = checkPalin(s.slice(j,i+j));
            if (chk) return i;
        }
    }
    return 1;
}
function checkPalin(str) {
    const mid = Math.floor(str.length / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    } return true;
}
let s = "abacba";
console.log(solution(s));