
// n=3 left=2 right=5
function solution(n, left, right) {
    const len = right-left +1;
    let answer = [];
    for(let i=left;i<=right;i++){
        answer.push(Math.max(Math.floor(i/n), i%n)+1);
    }

    return answer;
}

let n = 3;
let left = 2;
let right = 5;
console.log(solution(n, left, right));

// function solution(n, left, right) {
//     let map = [];
//     let answer = [];
//     makeMap(map, n);
//     changeMap(map, n);
//     sumMap(answer, map, n);
//     let target = right- left +1;
//     return answer.splice(left, target);
// }

// function sumMap(answer, map, n){
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             answer.push(map[i][j]);
//         }
//     }
// }
// function changeMap(map, n){
//     for(let i=0;i<n;i++){
//         for(let j=0;j<i;j++){
//             map[i][j] = i+1;
//         }
//     }
// }
// function makeMap(map, n){
//     for(let i=0;i<n;i++){
//         let idx = 1;
//         map.push([]);
//         for(let j=0;j<n;j++){
//             map[i].push(idx)
//             idx++;
//         }
//     }
// }
    
// let n = 3;
// let left = 2;
// let right = 5;
// console.log(solution(n, left, right));