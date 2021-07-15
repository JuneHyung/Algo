function solution(genres, plays) {
    let len = plays.length;
    let song = {};
    let sum = {};
    var answer = [];
    for (var i = 0; i < len; i++) {    
        song[i] = [plays[i], genres[i]];
        sum[genres[i]] == undefined ? sum[genres[i]] = plays[i] : sum[genres[i]] += plays[i];
    }
    console.log(sum);
    const sumSort = Object.entries(sum)
        .sort(([, a], [, b]) => b - a)
    console.log(sumSort);
    const songSort = Object.entries(song)
        .sort(([, a], [, b]) => b[0] - a[0])
    
    console.log(songSort);
    let cnt = 0;
    for (var j = 0; j < sumSort.length; j++) {
        cnt = 0;
        for (var i = 0; i < songSort.length; i++) {
            if (cnt == 2) {
                continue;
            }
            if (songSort[i][1][1] == sumSort[j][0]) {
                // console.log(`${songSort[i][1][0]} , ${songSort[i][1][1]}`)
                let num = parseInt(songSort[i][0]);
                answer.push(num);
                cnt++;
            }
            
        }
    }
    
    return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
