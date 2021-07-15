function solution(nums) {
    let answer = 0;

    let set = new Set(nums);
    set.size > nums.length/2 ? answer = nums.length/2 : answer = set.size

    return answer;
}

let nums = [3,1,2,3];
console.log(solution(nums));