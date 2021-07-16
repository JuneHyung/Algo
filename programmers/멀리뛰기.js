function solution(n) {
    // let fibo = [0,1,2];
    let result = 0;
    let first = 1;
    let second = 2;
    if (n == 1) result = first;
    else if (n == 2) result = second;
    else {
        for (var i = 3; i <= n; i++) {
            // fibo.push((fibo[i - 2] + fibo[i - 1])%1234567);
            result = (first + second) % 1234567;
            first = second;
            second = result;
        }
    }
    // console.log(fibo);
    return result;
}

let n = 4;
console.log(solution(n));