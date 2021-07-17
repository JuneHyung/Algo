function solution(n, times) {
    times.sort((a, b) => { return a - b });
    let left = 1;
    let right = n * times[times.length - 1];
    let answer = right;
    while (left <= right) {
        console.log(`left : ${left}, right :${right}`)
        let mid = Math.floor((left + right) / 2);
        console.log(`mid : ${mid}`);
        let cnt = 0;
        console.log(`before cnt : ${cnt}`);
        times.forEach(value => {
            cnt += Math.floor(mid / value);
            console.log(`after cnt: ${cnt}`)
            if (cnt >= n) {
                answer = Math.min(mid, answer);
                return;
            }
        });
        console.log();
        cnt >= n ? right = mid - 1 : left = mid + 1;
    }


    return answer;
}

let n = 6;
let times = [7, 10];

console.log(solution(n, times));