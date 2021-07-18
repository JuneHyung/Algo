function solution(distance, rocks, n) {
    rocks.unshift(0);
    rocks.push(distance);
    rocks.sort((a, b) => { return a - b; });
    console.log(rocks);
    let left = 0;
    let right = rocks[rocks.length - 1];
    // [ 0,  2, 11, 14, 17, 21, 25]
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let cnt = 0;
        let now = 0;
        for (var i = 1; i < rocks.length; i++) {
            console.log(`${rocks[i]} - ${now} : ${rocks[i] - now}`);
            console.log(`mid : ${mid}`);
            console.log(`cnt : ${cnt}`);
            console.log(`rocks[i] : ${rocks[i]}`);
            console.log();
            (rocks[i] - now) < mid ? cnt++ : now = rocks[i];
        }
        cnt > n ? right = mid - 1 : left = mid + 1;
        console.log(`cnt : ${cnt}, n : ${n}, right : ${right}, left : ${left}`)
    }
    // console.log(load);
    var answer = right;
    return answer;
}
let distance = 25;
let rocks = [2, 14, 11, 21, 17];
let n = 2;
console.log(solution(distance, rocks, n));