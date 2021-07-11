function solution(n, results) {
    let rank = [];
    for (var i = 0; i < n; i++) {
        rank[i] = new Array(n).fill(0);
    }

    for (var j = 0; j < results.length; j++) {
        let win = results[j][0]-1;
        let lose = results[j][1]-1;
        console.log(`win : ${win}, lose : ${lose}`)
        rank[win][lose] = 1;
        rank[lose][win] = -1;
    }
    console.log(rank);
    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < rank[i].length; j++) {
            for (var k = 0; k < rank[i].length; k++) {
                if (j == i || k == i) continue;
                if (rank[j][i] == 1 && rank[i][k] == 1) {
                    rank[j][k] = 1;
                } else if (rank[j][i] == -1 && rank[i][k] == -1) {
                    rank[j][k] = -1;
                }
            }  
        }
    }
    console.log(rank);
    var answer = 0;
    for (var i = 0; i < n; i++) {
        let cnt = 0;
        for (var j = 0; j < rank[i].length; j++) {
            if (rank[i][j] == 0) {
                cnt++;
            }
            if (j ==rank[i].length-1 && cnt == 1) answer++;
        }
    }
    
    
    return answer;
}

let n = 5;
let results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];
console.log(solution(n, results));
