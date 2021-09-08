// 야근피로도 : 야근을 시작한 시점에서 남은일의 작업량을 제곱하여 더한값

function solution(n, works) {
    let sorted = works.sort((a,b)=>{return b-a});
    // console.log(sorted);
    let idx = 0;
    while(n>0){
       if(sorted[idx] < sorted[idx+1]){
           console.log('e');
           idx++;
       }
       if(sorted[idx-1]== sorted[idx]){
           console.log('d');
           idx=0;
       }
       sorted[idx]--;
       n--;
    //    console.log(idx, n, sorted);
    }
    // console.log(sorted);
    sorted = sorted.map(el=>{
        return el<0 ? el = 0 : el;
    })
    // console.log(sorted);
    let pow = sorted.map(el=>Math.pow(el, 2));
    let answer = pow.reduce((a, cur)=>{return a + cur},0)
    return answer;
}
let n =99;
let works =  [2, 15, 22, 55, 55];
console.log(solution(n, works));