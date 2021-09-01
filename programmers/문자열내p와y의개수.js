function solution(s){
    let pcnt=0, ycnt=0;
    s.split('').forEach(el=>{
        if(el.toLowerCase()=='p') pcnt++;
        if(el.toLowerCase()=='y') ycnt++;
    })
    return pcnt==ycnt ? true : false;
}
let s = "pPY";
console.log(solution(s));