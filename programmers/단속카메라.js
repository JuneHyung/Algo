// routes[i][0] 고속도로 진입지점
// routes[i][1] i번쨰 차량이 고속도로에서 나간 지점
// [-20,15]는 첫번째 차량이 -20진입 15에서 나감.
// [-14, 5]는 두번쨰 차량이 -14진입 -5에서 나감.
// [-18, -13]는 두번쨰 차량이 -18진입 -13에서 나감.
// [-5, -3]는 두번쨰 차량이 -5진입 -3에서 나감. 4
function solution(routes) {
    let arr = [];
    let answer = 0;
    routes.forEach((el) => { arr.push(el) });
    arr.sort((a, b) => { return a[1] - b[1] })
    console.log(arr);
    while (arr.length != 0) {
        let pos = arr[0][1];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i][0] <= pos) {
                arr.splice(i,1);
                i--;
            }
        }
        answer++;
    }


    return answer;
}

let routes = [[-20, 15], [-14, -5], [-18, -13], [-5, -3]];
console.log(solution(routes));