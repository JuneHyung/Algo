function solution(nums) {
    var answer = 0;
    dfs(nums, 0)
    let sumArr = [];
    for (var i = 0; i < answers.length; i++) {
        let sum = 0;
        for (var j = 0; j < 3; j++) {
            sum += answers[i][j];
        }
        sumArr.push(sum);
    }
    
    // let cnt = 0;
    sumArr.forEach(el => {
        if (chkPrime(el)) {
            console.log(el);
            answer++;
        }
    })
    return answer;
}
let answers = [];
function dfs(nums, depth, arr = []) {
    if (depth == 3) answers.push([...arr]);
    else {
        for (var i = 0; i < nums.length; i++) {
            arr.push(nums[i]);
            dfs(nums.slice(i + 1), depth + 1, arr);
            arr.pop();
        }
    }
}
function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num%i===0) return false;
    }
    return true;
}
let nums = [1, 2, 3, 4];
console.log(solution(nums));
