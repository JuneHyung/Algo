const solution = (arr) => {
    let max = 0;
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            answer.push(arr[i]);
        };
    }
    return answer.length;
}

// ▣ 입력예제 1 
// 8
// 130 135 148 140 145 150 150 153 
// ▣ 출력예제 1
// 5

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
