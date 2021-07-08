function solution(number, k) {
    const stack = [];
    let answer = "";
    for (let i = 0; i < number.length; i++) {
        const el = number[i];
        while (k > 0 && stack[stack.length - 1] < el) {
            stack.pop();
            k--;
        }
        stack.push(el);
    }
    console.log(stack);
    stack.splice(stack.length - k, k)
    console.log(stack);
    answer = stack.join("");
    return answer;
}

let number = "9999"
// let number = "09091"
let k = 2;
console.log(solution(number, k));