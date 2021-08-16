function solution(s, n) {
    let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let str = s.split('');
    
    let answer = str.map((el)=>{
        if(el == ' ') return ' '
        else{
        let Alpha = lowerAlpha.includes(el) ? lowerAlpha : upperAlpha;
        let idx = Alpha.indexOf(el)+n;
        console.log(idx);
        idx>=26 ? idx -= 26 : idx = idx;
        return Alpha[idx];
        }
    }).join('');
   return answer;
}
let s = "a B z"
let n = 4
console.log(solution(s, n));