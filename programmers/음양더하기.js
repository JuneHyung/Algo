function solution(absolutes, signs) {
    var answer = 123456789;
    for (var i = 0; i < signs.length; i++) {
        signs[i] ? absolutes[i] *= 1 : absolutes[i] *= -1;
    }
    let sum = (a, b) => a + b;
    answer = absolutes.reduce(sum);
    return answer;
}
let absolutes = [4, 7, 12];
let signs = [true, false, true];
console.log(solution(absolutes, signs))

// absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);