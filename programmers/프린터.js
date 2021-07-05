// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.
function solution(priorities, location) {
    let arr = [];
    // console.log(`location : ${location}, priorities : ${priorities}`);
    // console.log(`length : ${priorities.length}`);
    while (location != -1) {
        let max = Math.max(...priorities);
        // console.log(`max : ${max}`);
        // console.log(`length : ${priorities.length}`);
        if (priorities[0] != max) {
            // console.log(`if`);
            priorities.push(priorities.shift());
            location == 0 ? location = priorities.length - 1 : location -= 1;
            // console.log(`location : ${location}, priorities : ${priorities}`);
            // console.log(`arr : ${arr}`);
            // console.log();
        } else { // priorities[0] == max
            // console.log(`else`);
            arr.push(priorities.shift());
            location-=1;
            // console.log(`arr : ${arr}, priorities : ${priorities}`);
            // console.log(`loc : ${location}`);
            // console.log();
        }
    }
    arr.length;
    return arr.length;
}

let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;
console.log(solution(priorities, location));