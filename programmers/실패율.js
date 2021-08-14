// 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
function solution(N, stages) {
    let answer = [];
    let arr = [];
    let len = stages.length;
    for (let i = 1; i <= N; i++) {
        let stageNum = stages.filter(el => el == i).length;
        let fail = 0;
        stageNum == 0 ? fail = 0 : fail = stageNum / len;
        len -= stageNum;
        arr.push({ i,fail});
    }
    console.log(`before : ${JSON.stringify(arr)}`);
    arr.sort((a, b) => {
        return b.fail-a.fail
    })
    console.log(arr);
    answer = arr.map(el => el.i);
    return answer;
}
let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));