function solution(A, B) {
    var answer = 0;
    let len = B.length;
    let left = 0;
    A.sort((a, b) => a-b);
    B.sort((a, b) => a-b);
    for (let i = 0; i < len; i++) {
        if (A[left] < B[i]) {
            answer += 1;
            left++;
         }
    }
    
    return answer;
}
let A = [5, 1, 3, 7];
let B = [2, 2, 6, 8];
console.log(solution(A, B));