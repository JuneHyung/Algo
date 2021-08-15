function solution(n) {
    let answer = n + 1;
    let binary = n.toString(2);
    // let oneCnt = binary.match(/1/g).length;
    let oneCnt = binary.split('').filter(el => el == '1').length;
    while (answer > n) {
        let binaryAnswer = answer.toString(2);
        // let answerOneCnt = binaryAnswer.match(/1/g).length;
        let answerOneCnt = binaryAnswer.split('').filter(el=>el=='1').length;
        if (oneCnt == answerOneCnt) break;
        answer +=1;
    }
    
    return answer;
}

let n = 78;
console.log(solution(n));