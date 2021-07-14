function solution(n) { 
    var answer = '';
    console.log(n.toString(3));

    while (n > 0) {
        switch ((n % 3)) {
            case 0:
                answer =  '4' + answer;
                n = n/3 -1;
                break;
            case 1:
                answer = '1' + answer;
                n = Math.floor(n / 3);
                break;
            case 2:
                answer = '2' + answer;
                n = Math.floor(n / 3);
                break;
        }
    }
    return answer;
}
let n = 3;
console.log(solution(n));