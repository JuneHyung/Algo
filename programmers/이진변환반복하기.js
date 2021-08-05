function solution(s) {
    let zero = 0;
    let cnt = 0;
    while (s !== '1') {
        let tmpLen = [...s].reduce((total, string) => {
            // console.log(`s : ${s}, total : ${total}, string: ${string}`)
            if (string == '0') {
                zero++;
                return total;
            }
            return total+1;
        }, 0);
        s = tmpLen.toString(2);
        cnt++;
    }
    return [cnt, zero];
}
let s = "110010101001";
console.log(solution(s));
// 변환횟수, 제거된 0 개수.