function solution(n) {
    let answer = 1;
    while(true){
        if(n%answer==1) break;
        answer++;
    }
    return answer;
}
let n = 10;
console.log(solution(n));