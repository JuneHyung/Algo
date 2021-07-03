    // brown = yellowW*2 + yelloH*2 + 4
    function solution(brown, yellow) {
        for (var i = 1; i <= yellow; i++) {
            let yellowW = i;
            let yellowH = yellow / i;

            var answer = [];
            let width, height = 0;
            if (brown == yellowW * 2 + yellowH * 2 + 4) {
                
                yellowW > yellowH ? [width, height] = [yellowW, yellowH] :[width, height] = [yellowH, yellowW]
                // yellowW > yellowH ? height = yellowH : height = yellowW;
                // width = Math.max(yellowW, yellowH);
                // height = Math.min(yellowW, yellowH);
                answer = [width + 2, height + 2];
                break;
            }

        }
        return answer;
    }

    let brown = 10
    let yellow = 2
    console.log(solution(brown, yellow))