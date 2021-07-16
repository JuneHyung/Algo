function solution(n) {
    
    // let three = n.toString(3);
    // // console.log(three);

    // three = three.split("").reverse().join("");
    // // console.log(three);

    // let answer = parseInt(parseInt(three, 3).toString(10));
    // return answer;

    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

let n = 45;
console.log(solution(n));