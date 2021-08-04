function solution(info, query) {
    var answer = [];
    let info_len = info.length;
    let query_len = query.length;
    
    for (let i = 0; i < query_len; i++) {
        let cnt = 0;
       
        let condition = query[i].split(" and ");
        let tmp = condition.pop();
        // console.log(tmp);
        let last = tmp.split(" ");
        // console.log(last);
        condition.push(last[0]);
        condition.push(parseInt(last[1]));
        // console.log(`condition : ${condition}`);
        
        for (let j = 0; j < info_len; j++) {
            let info_condition = info[j].split(" ");
            let i_tmp = info_condition.pop();
            info_condition.push(parseInt(i_tmp));        
            let chk = 0;
            
            // console.log(`info_condition : ${info_condition}`);
            for (let k = 0; k < info_condition.length; k++) {
                if (condition[k] == '-') {
                    chk++;
                    // console.log(`chk : ${chk}`);
                }
                else if (info_condition[k] == condition[k]) {
                    chk++;
                    // console.log(`chk : ${chk}`);
                    
                }
                else if (info_condition[k] != condition[k]) {
                    break;
                }
                if (chk == 4) {
                    k++;
                    if (info_condition[k] >= condition[k]) {
                        cnt++;
                        // console.log(`before : ${cnt}`)
                    }
                    break;
                }
            }
        }
        // console.log(`after : ${cnt}`)
        // console.log();
        answer.push(cnt);
    }
    return answer;
}

let info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
let query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];
console.log(solution(info, query));