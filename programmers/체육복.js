
function solution(n, lost, reserve) {
    let student = new Array(n).fill(1);
    
    reserve.forEach(e => {
        // console.log(e);
        student[e - 1]++;
    })
    lost.forEach(e => {
        student[e - 1]--;
    })

    // console.log(student);

    student.forEach((s, idx) => {
        if (s == 0 && student[idx - 1] == 2) {
            student[idx] = 1;
            student[idx - 1] = 1;
        } else if (s == 0 && student[idx + 1] == 2) {
            student[idx] = 1;
            student[idx + 1] = 1;
        }
    });
    var answer = 0;
    student.forEach(e => {
        if (e > 0) answer++;
    })
    return answer;
}

let n = 5;
let lost = [3];
let reserve = [1, 2, 3, 5];
console.log(solution(n, lost, reserve))