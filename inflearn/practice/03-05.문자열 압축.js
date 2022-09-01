const solution = (str) => {
    let answer = [];
    let strList = [...new Set([...str])];
    for (let i = 0; i < strList.length; i++) {
        const target = strList[i];
        const cnt = [...str].filter(el => el === target).length;
        answer.push(`${target}${cnt === 1 ? '' : cnt}`)
    }
    return answer.join('');
}


let str = "KKHSSSSSSSE";
console.log(solution(str));