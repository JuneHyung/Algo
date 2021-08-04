function solution(info, query) {
    var answer = [];
    const map = {};
    let info_len = info.length;
    let query_len = query.length;
    
    function combination(cnt, key, arr, score) {
        if (cnt == 4) {
            !map[key] ? map[key] = [score] : map[key].push(score);
            return;
        }
        combination(cnt + 1, key + arr[cnt], arr, score)
        combination(cnt+1, key+"-",arr,score)
    }

    for (let i = 0; i < info_len; i++) {
        const arr = info[i].split(" ");
        const score = Number(arr.pop());
        combination(0, "", arr, score);
    }

    for (let key in map) {
        map[key] = map[key].sort((a, b) => a - b);
    }

    for (let i = 0; i < query_len; i++) {
        const arr = query[i].replace(/ and /g, " ").split(" ");
        const score = parseInt(arr.pop());
        console.log(`score :${score}`)
        const key = arr.join("");
        const scoreArray = map[key];
        console.log(`scoreArray : ${scoreArray}`)
        if (scoreArray) {
            let left = 0;
            let right = scoreArray.length;
            
            while (left < right) {
                const mid = parseInt((left + right) / 2);
                (scoreArray[mid] >= score) ? right = mid : left = mid + 1;
            }
            answer.push(scoreArray.length - left);
        } else {
            answer.push(0);
        }
        console.log(`score : ${score}, scoreArr : ${scoreArray},`);
    }
    return answer;
}
let info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
let query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];
console.log(solution(info, query));