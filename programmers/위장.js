function solution(clothes) {
    let answer = 1;
    let result = {};
    for (var i = 0; i < clothes.length; i++) {
        result[clothes[i][1]] = (result[clothes[i][1]] || 1) + 1;
        console.log(result[clothes[i][1]])
    }
    console.log(result);
    for (var key in result) {
        answer *= result[key];
    }
    return answer - 1;
}


let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));