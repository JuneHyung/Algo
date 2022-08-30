const solution = (s) => {
    const answer = [...new Set(s)].join('');
    return answer;
}
console.log(solution("ksekkset"));