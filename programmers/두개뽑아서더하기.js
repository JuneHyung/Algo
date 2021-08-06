function solution(numbers) {
    var answer = new Set();
    let len = numbers.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i == j) continue;
            answer.add(numbers[i] + numbers[j]);
        }
    }
    return Array.from(answer).sort((a,b)=>a-b);
}
let numbers = [2, 1, 3, 4, 1];
console.log(solution(numbers));