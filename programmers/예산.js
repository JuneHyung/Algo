function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>{return a-b;});
    for(let i=0;i<d.length;i++){
        if(d[i] > budget) break;
        else{
            budget -= d[i];
            answer+=1;
        }
    }
    return answer;
}

let d = [1,3,2,5,4];
let budget = 9;
console.log(solution(d, budget));