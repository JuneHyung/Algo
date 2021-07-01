// https://velog.io/@proshy/JS순열조합중복순열-구하기
let answer = [];

const dfs = (nums, num, arr = []) => {
    if (num === 3) answer.push([arr]);
    else {
        for (let i = 0; i < nums.length; i++) {
            arr.push(nums[i])
            dfs(nums.slice(i + 1), num + 1, arr);
            arr.pop()
        }
    }
}

test = [1,2,3,4]
dfs(test, 0);


let e = test.splice(0);
console.log(e)
console.log(answer);