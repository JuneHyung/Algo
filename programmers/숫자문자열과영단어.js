function solution(s) {
    let regex = [/zero/g, /one/g, /two/g, /three/g, /four/g, /five/g, /six/g, /seven/g, /eight/g,/nine/g, ]
   
    for (var i = 0; i < 10; i++) {
        s = s.replace(regex[i], i);
    }

    var answer = parseInt(s);
    return answer;
}

let s = "one4oneeight";
console.log(solution(s));