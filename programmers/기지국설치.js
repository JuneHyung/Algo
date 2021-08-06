function solution(n, stations, w) {
    // let arr = Array(n).fill(0);
    var answer = 0;
    let index = 1;
    let range = 2 * w + 1;
    //index는 전파 닿지않는 구간의 시작점
    // stations[0] -w는 전파가 닿는 최초 아파트.
    // index부터 sations[0]-w 까지가 전파가 닿지않는 구간.

    stations.forEach((el) => {
        if (el - w > index) {
            answer += Math.ceil((el - w - index) / range);
        }
        // index의 값을 stations[0]+w+1로 변경.
        // index부터 stations[0]+w까지는 전파가 모두 닿게 되었으므로,
        index = el+ w + 1;
    })

    // 마지막으로 설치된 기지국까지 탐색을하고 종료되므로 마지막기지국뒤구간은 따로 answer에 더해줌.
    return answer + Math.ceil((n-index+1)/range);
}

let n = 16;
let stations = [9];
let w = 2;
console.log(solution(n, stations, w));