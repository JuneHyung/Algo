function solution(scores) {
    var answer = [];
    let n = scores.length;

    for (let i = 0; i < n; i++) {
        let temp = [];
        let average = 0;
        for (let j = 0; j < n; j++) {
            temp.push(scores[j][i]);
        }
        // console.log(temp);
        
        let max = Math.max(...temp);
        let min = Math.min(...temp);
        let chk = checkUniq(max, min, temp);
        switch (chk) {
            case 'maxmin':
                let flag = false;
                // console.log(`max: ${max}, min: ${min}`);
                if (!flag && temp[i] == max) {
                    temp.splice(temp.indexOf(max), 1);
                    flag = true;
                }
                if (!flag && temp[i] == min) {
                    temp.splice(temp.indexOf(min), 1);
                    flag = true;
                }
                break;
            case 'max':
                temp[i] == max ? temp.splice(temp.indexOf(max), 1) : temp = temp;
                break;
            case 'min':
                temp[i] == min ? temp.splice(temp.indexOf(min), 1) : temp = temp;
                break;
        }
        
        console.log(temp);
        average = calc(temp);
        let rank = chk_rank(average);
        answer.push(rank);
        
    }

    return answer.join('');
}
function calc(temp) {
    let average = 0;
    temp.forEach(el => {
        average += el;
    })
    average /= temp.length;
    return average;
}
function chk_rank(average) {
    // console.log(`average : ${average}`)
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 50) return 'D';
    else return 'F';
}
function checkUniq(max, min, temp) {
    console.log(max, min, temp)
    let mxchk = 0;
    let mnchk = 0;
    temp.forEach(el => {
        if (el == max) mxchk++;
        if (el == min) mnchk++;
    })
    if (mxchk == 1 && mnchk == 1) return "maxmin";
    else if (mxchk == 1 && mnchk != 1) return "max";
    else if (mxchk != 1 && mnchk == 1) return "min";
    else return 'notunique'
}
// let scores = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]]
// let scores = [[50, 90], [50, 87]];
// let scores = [[70, 49, 90], [68, 50, 38], [73, 31, 100]];
let scores = [[75, 50, 100], [75, 100, 20], [100, 100, 20]];
console.log(solution(scores));