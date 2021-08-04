function solution(price, money, count) {
    var answer = -1;

    let cost = 0;
    for (let i = 1; i <= count; i++) {
        cost += price * i;
    }
    
    money - cost >= 0 ? answer = 0 : answer = Math.abs(money - cost);

    return answer;
}
let price = 3; // 원래 이용료
let money = 20; // 초기금액
let count = 4; // 횟수
console.log(solution(price, money, count));