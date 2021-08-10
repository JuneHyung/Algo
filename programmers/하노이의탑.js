function solution(n) {
    
    hanoi(n, 1, 3, 2);
    
    return arr;
}
let arr = [];
function hanoi(n, from, to, mid) {
    if (n == 1) { arr.push([from, to]); }
    else {
        hanoi(n - 1, from, mid, to);
        arr.push([from, to]);
        hanoi(n - 1, mid, to, from);
    }
}
let n = 2;
console.log(solution(n));