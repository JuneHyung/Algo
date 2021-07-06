function solution(begin, target, words) {
    let visited = Array(words.length).fill(false);
    if (words.indexOf(target) == -1) return 0;
    else {
        return dfs(words, target, 0, begin, visited);
    }
    
}

let ans = Infinity;
function dfs(words, target, depth, goal, visited ) {
    if (goal == target) return depth;
    else {
        for (var i = 0; i < words.length; i++) {
            if (!visited[i] && checkWords(goal, words[i])) {
                visited[i] = true;
                ans = Math.min(ans, dfs(words, target, depth + 1, words[i], visited));
                visited[i] = false;
            }
        }
        return ans;
    }
}

function checkWords(a, b) {
    if (a.length != b.length) {
        return false;
    }
    
    let differentCnt = 0;
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) != b.charAt(i)) {
            differentCnt++;
        }
        if (differentCnt > 1) {
            return false;
        }
    }
    return true;
    
}
let begin = "hit";
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log","cog"];
console.log(solution(begin, target, words));