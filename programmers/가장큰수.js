
let result = [];


let numbers = [0, 0, 0, 1]

function solution(numbers) {
    numbers.sort();
    let res = [];
    for (var i = 0; i < numbers.length; i++) {
        res.push(numbers[i].toString());
    }
    
    res.sort((a, b) => {
        return (b + a) - (a + b);
    })
    var answer = res.join('');
    console.log(parseInt(answer));
    if (parseInt(answer) == 0) answer = '0';
    
    return answer;
}


// console.log(solution(numbers));

// let num = [6, 10, 2];
// console.log(num.sort((a, b) => { return (a-b) - (b-a) }))


/* 이해해보기 
function solution(numbers) {
    // console.log(`0 : ${typeof (numbers)}`);
    console.log(`numbert : ${typeof (numbers[0])}`);
    var answer = numbers.map(c => c + '')
    console.log(`answert : ${typeof(answer[0])}`)
    // console.log(`1 : ${typeof (answer)}`);
    answer = answer.sort((a, b) => (b + a) - (a + b)).join('');

    console.log(`answer : ${typeof(answer)}`)
    
    var answer2 = numbers2.map(c => c + '').sort((a, b) => (b + a) - (a + b)).join('');
    console.log(`answer2 : ${typeof(answer2)}`)
   //var answer = numbers.join('');
   //if (parseInt(answer) == 0) answer = '0';
   
    return answer[0]==='0'? '0' : answer;
}

let numbers = [6, 10, 2];
let numbers2 = [6, 10, 2];
console.log(solution(numbers));
*/