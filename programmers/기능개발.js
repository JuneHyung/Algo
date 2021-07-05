function solution(progresses, speeds) {
    var answer = [];
    let bepo = []
    for (var i = 0; i < progresses.length; i++) {
        let day = Math.ceil(((100 - progresses[i]) / speeds[i]))
        bepo.push(day)
        i != 0 ? (bepo[i] <= bepo[i - 1] ? bepo[i] = bepo[i - 1] : bepo[i] = bepo[i]) : bepo[i] = bepo[i];
    }
    
    let set = new Set(bepo);
    let setArr = Array.from(set);

    for (var i = 0; i < setArr.length; i++) {
        let cnt = bepo.filter(e => setArr[i] == e).length;        
        answer.push(cnt);
    }
    return answer;
}

let progresses = [70];
let speeds = [20];
console.log(solution(progresses, speeds));