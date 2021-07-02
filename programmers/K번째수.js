function solution(array, commands) {
    
    var answer = [];

    for (var i = 0; i < commands.length; i++) {
        let list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
            return a - b;
        });
        answer.push(list[commands[i][2]-1]);

    }
    return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));