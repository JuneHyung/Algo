// 내 풀이
const solution = (arr, student, rank) => {
    const max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            student[i] = rank;
            arr[i] = -1;
            break;
        }
    }
    rank += 1
    if (arr.filter(el => el === -1).length === arr.length) {
        const answer = student;
        return answer;
    }
    else return solution(arr, student, rank)
}


let rank = 1;
let arr = [87, 89, 92, 100, 76];
let student = new Array(arr.length).fill(0);
console.log(solution(arr, student, rank));




// // 답 풀이
// const solution2 = (arr) => {
//     let answer = new Array(arr.length).fill(1);
//     for (let i = 0; i < answer.length; i++) {
//         for (let j = 0; j < answer.length; j++) {
//             if (arr[i] < arr[j]) answer[i]++;
//         }
//     }
//     return answer;
// }
// let arr2 = [87, 89, 92, 100, 76];
// console.log(solution2(arr2));

