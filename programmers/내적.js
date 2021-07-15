function solution(a, b) {
    var answer = 0;
    for (var i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    return answer;
}
let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
console.log(solution(a, b));