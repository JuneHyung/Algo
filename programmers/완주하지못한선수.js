function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }

}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
let result = solution(participant, completion)
console.log(result)