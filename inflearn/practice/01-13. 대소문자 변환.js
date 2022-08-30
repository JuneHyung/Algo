const solution = (s) => {
    const answer = s.split('').map(el=>el===el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
    return answer;
}

console.log(solution("StuDY"));