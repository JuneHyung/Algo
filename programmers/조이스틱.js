function solution(name) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    // console.log(alpha);
    let arr = [];
    let answer = 0;
    for( i in name){
        arr.push(alpha.indexOf(name[i]));
        answer += (alpha.indexOf(name[i]) <= 13) ? alpha.indexOf(name[i]) : 26 - alpha.indexOf(name[i]);
    }

    let move = name.length - 1;
    for (var i in arr) {
        if (arr[i] == 0) {
            var cnt0 = 1;
            for (let j = parseInt(i) + 1; j < arr.length; j++) {
                if (arr[j] == 0) cnt0++;
                else break;
            }
        }
        let left_move = (i == 0) ? 0 : (parseInt(i) - 1) * 2;
        let left = left_move + (arr.length - cnt0 - parseInt(i));
        if (move > left) move = left;
    }
    return answer+move;
}
// let name = "JEROEN";
// let name = "JAZ"; // 위 9번, 우 2번, 
let name = "ABAAAAAAAAABB";
console.log(solution(name));    