function solution(w, h) {
    let answer = w*h;
    let cut = gcd(w, h);

    return answer-(w+h-cut);
}
function gcd(w, h) {
    let mod = w % h;
    if (mod == 0) return h;
    return gcd(h, mod);
}
let w = 8;
let h = 12;
console.log(solution(w, h));