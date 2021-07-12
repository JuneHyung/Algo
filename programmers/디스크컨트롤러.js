function solution(jobs) {
    // 먼저 오는 순서대로 정렬.
    jobs.sort((a,b)=>a[0] - b[0]);
    console.log(jobs);

    let pq = []; // 시작가능한 일들이 들어가며 작업시간 오름차순 정렬
    let i = 0, time = 0;
    let answer = 0;
    
    while (i < jobs.length || pq.length != 0) { // 우선순위큐가 빌때까지 
        console.log(`jobslen : ${jobs.length}, pqlen : ${pq.length}, i:${i}`);
        // 우선순위큐 넣기.
        if (i < jobs.length && jobs[i][0] <= time) {
            console.log(`jobs[i][0] : ${jobs[i][0]}, time : ${time}`)
            console.log(`before pq : ${pq}`)
            pq.push(jobs[i]);
            i++;
            console.log(`after : ${pq}`)
            pq.sort((a, b) => a[1] - b[1]);
            console.log(`sort : ${pq}`)
            console.log();
            continue;
        }
        // 도착한 작업이 없을 때
        if (pq.length == 0) {
            console.log(pq)
            time = jobs[i][0];
            console.log(`time : ${time}`);
        } else {
            
            const [start, work] = pq.shift();
            console.log(`start : ${start}, work : ${work}`);
            answer += time + work - start;
            time += work;
            console.log(`answer : ${answer}, time : ${time}`)
            console.log();
        }
    }

    
    return parseInt(answer/jobs.length);
}

let jobs = [[0, 3], [1, 9], [2, 6], ]
console.log(solution(jobs));