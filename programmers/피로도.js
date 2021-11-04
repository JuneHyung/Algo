function solution(k, dungeons) {
    check = []
    for(let i=0;i<dungeons.length;i++) check.push(false)
    dfs(dungeons, k, 0);
    return answer;
}

let check = [];
let answer = 0;
function dfs(dungeons, k, cnt){
    // console.log(dungeons, k, cnt, ans)
    for(let i=0;i<dungeons.length;i++){
        if(!check[i] && dungeons[i][0] <= k){
            check[i] = true;
            dfs(dungeons, k-dungeons[i][1], cnt+1);
            check[i] = false;
        }
    }
    answer = Math.max(answer, cnt);
}
let k = 80;
let dungeons =[[80,20],[30,10],[50,40]];
console.log(solution(k, dungeons));