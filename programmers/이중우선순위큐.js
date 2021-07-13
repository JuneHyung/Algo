function solution(operations) {
    let pq = [];
    var answer = [];
    for (var i = 0; i < operations.length; i++) {
        let command = operations[i].split(" ")[0];
        let value = parseInt(operations[i].split(" ")[1]);
        if (pq.length == 0) {
            switch (command) {
                case 'I':
                    pq.push(value);
                    break;
                case 'D':
                    //console.log('넘겨');
                    break;
            }
        } else {
            switch (command) {
                case 'I':
                    pq.push(value);
                    break;
                case 'D':
                    if (value == 1) {
                        let idx = pq.indexOf(parseInt(Math.max.apply(null, pq)));
                        pq.splice(idx, 1);
                    } else if (value == -1) {
                        let idx = pq.indexOf(parseInt(Math.min.apply(null, pq)));
                        pq.splice(idx, 1);
                    }
            }
        }
    }
    //console.log(`pq : ${pq}`);

    
    // let max = 0;
    // let min = Infinity;
    if (pq.length != 0) {
        // for (var i = 0; i < pq.length; i++) {
        //     max < pq[i] ? max = pq[i] : max = max;
        //     min > pq[i] ? min = pq[i] : min = min;
        // }
        answer = [parseInt(Math.max.apply(null, pq)), parseInt(Math.min.apply(null, pq))];
    }
    else {
        answer = [0,0]
    }
    
    //console.log(`max : ${max}, min : ${min}`)
    return answer;
}

let operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];
console.log(solution(operations))