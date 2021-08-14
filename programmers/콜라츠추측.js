function solution(num) {
    var answer = 0;
    while (num != 1) {
        num % 2 == 0 ? num /= 2 : num = num * 3 + 1;
        answer++;
        answer > 500 ? answer = -1:answer=answer
    }
    return answer
}
let num = 6;
console.log(solution(num));