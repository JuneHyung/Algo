// function solution(numbers, target) {
    
//     dfs(numbers, target, numbers[0], 0);
//     dfs(numbers, target, -1 * numbers[0], 0);
//     return answers;
// }

// let answers = 0;
// function dfs(nums, target, sum, depth,) {
//     if (depth == nums.length-1) {
//         if (sum == target) {
//             answers += 1;
//         }
//         return answers;
//     }
//     dfs(nums, target, sum + nums[depth + 1], depth + 1);
//     dfs(nums, target, sum - nums[depth + 1], depth + 1);
// }
function solution(numbers,target) {
    function func(numbers, r){
        if(numbers.length > 0){
            var tmp = numbers.pop() + r;
            return func(numbers.slice(), tmp) + func(numbers.slice(), -tmp);
        }
        else { return r==target ? 1:0;}
    }
    return func(numbers,0);
}
let numbers = [1, 2, 3, 4, 5];
let target = 3;
console.log(numbers.slice())
console.log(solution(numbers, target));