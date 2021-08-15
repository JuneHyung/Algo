function solution(n) {
    let answer = n + 1;
    let binary = n.toString(2);
    let oneCnt = 0;
    binary.split('').forEach(el => {
        if (el == '1') oneCnt++;
    });

    while (answer > n) {
        let answerOneCnt = 0;
        let binaryAnswer = answer.toString(2);
        binaryAnswer.split('').forEach(el => {
            if (el == '1') answerOneCnt++;
        });

        if (oneCnt == answerOneCnt) break;
        answer +=1;
    }
    
    return answer;
}

let n = 78;
console.log(solution(n));