// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.
function solution(n, words) { // O
    let answer = 0;
    for (let i = 1; i < words.length; i++) {
        let cur = words[i];
        let before = words[i - 1];
        if (words.indexOf(cur) != i) {
            answer = i + 1;
            break;
        }
        if(cur[0]!= before[before.length - 1] ){
            answer = i + 1;
            break;
        }
    }

    return answer ? [answer % n || n, Math.ceil((answer / n))] : [0, 0];
    
} 



let n = 3;
let words = ["tank", "kick", "know", "wheel","land", "dream", "mother", "robot","tank"]
console.log(solution(n, words));