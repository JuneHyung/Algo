
function solution(begin, target, words) {
    var answer = 0;

    const stack =[begin];
    const result = [];
    const visited = {};
    console.log(stack);
    let current;
    visited[begin] = true;
    while (stack.length) {
        console.log(`start : ${stack}`);
        current = stack.pop();
        console.log(`current : ${current}`);
        if(current === target) {
            answer = 1;
            break;
        }
        result.push(current);


        words.forEach(val => {
            if(!visited[val] && check(current, val) === 1) {
                visited[val] = true;
                stack.push(val);
                console.log(`s : ${stack}`);
            } 
        });
    }
    console.log(`result : ${result}`);
    console.log(`visited : ${JSON.stringify(visited)}`);
    return answer ? result.length : 0;
}

function check(v1, v2) {
    let count = 0;
    for(let i = 0; i < v1.length; i++) {
        if(v1[i] !== v2[i]) {
            count++;
        }
    }

    return count;
}

let begin = "hit";
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log","cog"];
console.log(solution(begin, target, words));