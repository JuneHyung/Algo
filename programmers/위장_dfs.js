
function solution(clothes) {
    let result = {}

    for (var i = 0; i < clothes.length; i++) {
        [name, type] = clothes[i];

        result[i] = {
            type,
            name,
        }
    }

    
    let resArr = Object.entries(result);

    let answer = 0;
    for (let i = 1; i <= resArr.length; i++) {
        dfs(resArr, 0, [], i)
        answer += answers.length
        answers.splice(0);
    }
    return answer;
}

let answers = [];
let typeArr = new Set();
function dfs(nums, num, arr, tlen) {
    if (num == tlen) return answers.push([...arr]);
    else {
        for (let i = 0; i < nums.length; i++) {
            

            if (typeArr.has(nums[i][1].type)) continue;
            else {
                typeArr.add(nums[i][1].type);
                arr.push(nums[i])
                dfs(nums.slice(i + 1), num + 1, arr, tlen)
                
                typeArr.delete(nums[i][1].type);
                arr.pop()
            }
        }
    }
}


let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));