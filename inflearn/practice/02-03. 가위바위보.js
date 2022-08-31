const solution = (a, b) => {
    let answer = [];
    for (let i = 0; i < a.length; i++) {
        const A = a[i];
        const B = b[i];
        if (A === B) answer.push('D');
        else if (A === 3 && B === 1) answer.push('B');
        else if (A === 3 && B === 2) answer.push('A');
        else if (B === 3 && A === 1) answer.push('A');
        else if (B === 3 && A === 2) answer.push('B');
        else answer.push(A > B ? 'A' : 'B')
    }
    return answer;
}

// ▣ 입력예제 1 
// 5
// 2 3 3 1 3
// 1 1 2 2 3
// ▣ 출력예제 1
// A
// B
// A
// B
// D
// 1:가위, 2:바위, 3:보
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));