// 1번 : 1~5 반복
// 2번 : 2한번 1,3,4,5 한번씩
// 3번 : 33 11 22 44 55 33 11 22 44 55
function solution(answers) {
    
    let p1 = [1,2,3,4,5];
    let p2 = [2,1,2,3,2,4,2,5];
    let p3 = [3,3,1,1,2,2,4,4,5,5];


    let result1 = answers.filter((x,i)=> x == p1[i%p1.length]).length;
    let result2 = answers.filter((x,i) => x == p2[i%p2.length]).length;
    let result3 = answers.filter((x,i) => x == p3[i%p3.length]).length;
    let answer = [];
    let max = Math.max(result1, result2, result3);
    
    if (result1 == max) answer.push(1);
    if (result2 == max) answer.push(2);
    if (result3 == max) answer.push(3);

    return answer;
}

let answers = [1,3,2,4,2];
console.log(solution(answers));