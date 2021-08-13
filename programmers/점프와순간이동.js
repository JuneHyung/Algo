// 한 번에 K 칸을 앞으로 점프하거나, (현재까지 온 거리) x 2 에 해당하는 위치

function solution(n)
{
    var ans = 0;
    while (n!=0) {
        if (n % 2 == 0) n /= 2;
        else {
            n--;
            ans++;
        }
        console.log(`${n} , ${ans}`)
    }

    return ans;
}
let n = 4;
console.log(solution(n));