const solution = (arr) => {
    const answer = arr.filter((el, idx) => {
        if (idx > 0) {
            return el > arr[idx - 1]
        }
        return el
    });
    return answer;
}

// ▣ 입력예제 1 
// 6
// 7 3 9 5 6 12
// ▣ 출력예제 1
// 7 9 6 12
let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));