function solution(lottos, win_nums) {
    var answer = '';

    let countZero = lottos.filter(x => 0 == x).length;
    let count = lottos.filter(x => win_nums.includes(x)).length;

    let big = count + countZero;
    let small = count;

    let result = {
        0: 6,
        1: 6,
        2: 5,
        3: 4,
        4: 3,
        5: 2,
        6: 1,
    };
    
    big = result[big];
    small = result[small];

    let rank = [];

    rank.push(big);
    rank.push(small);

    answer = rank
    return answer
}


let lottos = [0, 0, 0, 0, 0, 0]
let win_nums = 	[38, 19, 20, 40, 15, 25]

console.log(solution(lottos, win_nums));