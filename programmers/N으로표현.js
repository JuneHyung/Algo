function solution(N, number) {
    const s = [new Set()]
    for (let i = 1; i <= 8; i++) {
        s.push(new Set([new Array(i).fill(N).join('') * 1]))
        
        for (let j = 1; j <= i; j++) {
            for (const x1 of [...s[j]]) {
                for (const x2 of [...s[i - j]]) {
                    s[i].add(x1 + x2)
                    s[i].add(x1 - x2)
                    s[i].add(x1 * x2)
                    if (x2) {
                        s[i].add((x1 / x2) - (x1 / x2) % 1)
                    }
                }
            }
        } console.log(s);
        if (s[i].has(number)) { return i }
    }
    return -1;
    // console.log(s);
}

let N = 5;
let number = 12;
console.log(solution(N, number));