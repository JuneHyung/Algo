const solution = (arr) => {
    let score = 1;
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        switch (t) {
            case 0:
                score = 1;
                break;
            case 1:
                answer += score;
                score++;
                break;
        }
    }
    return answer;
}


// ▣ 입력예제 1 
// 10
// 1 0 1 1 1 0 0 1 1 0
// ▣ 출력예제 1
// 10
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));