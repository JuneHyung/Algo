
const sumCol = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j][i];
        }
        max = Math.max(max, sum);
    }
    return max;
}

const sumRow = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i].reduce((acc, cur) => acc + cur, 0);
        max = Math.max(max, sum);
    }
    return max;
}


const sumSlash = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
        max = Math.max(max, sum);
    }
    return max;
}

const sumReverseSlash = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i][i];
        max = Math.max(max, sum);
    }
    return max;
}
const solution = (arr) => {
    const rowMax = sumRow(arr);
    const colMax = sumCol(arr);
    const slash = sumSlash(arr);
    const reverseSlash = sumReverseSlash(arr);
    // console.log(rowMax, colMax, slash, reverseSlash)

    const answer = Math.max(rowMax, colMax, slash, reverseSlash);
    return answer;
}


let arr = [[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr));