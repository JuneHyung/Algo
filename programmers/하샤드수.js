function solution(x) {
    var answer = true;
    let arr = String(x).split("");
    let num = 0;
    arr.forEach(el => {
        num += parseInt(el)
    })
    x%num==0 ?answer = true:answer =false
    return answer;
}
let x = 10;
console.log(solution(x));