// 1. split & join
// function solution(phone_number) {
//     let arr = phone_number.split("");
//     let len = phone_number.length;

//     for (let i = 0; i < len - 4; i++) {
//         arr[i] = '*';
//     }

//     var answer = arr.join('');
//     return answer;
// }
function solution(phone_number) {
    // 2. repeat & slice
    // let answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);

    // 3. 정규표현식
    let answer = phone_number.replace(/\d(?=\d{4})/g, '*');
    return answer;
}
let phone_number = "01033334444";
console.log(solution(phone_number));