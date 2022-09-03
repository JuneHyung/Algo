const getSum = (num, sum) => {
    // console.log(num, sum)
    if (Math.floor(num / 10) === 0) {
        return sum + (num % 10);
    }
    else {
        return getSum(Math.floor(num / 10), sum + (num % 10))
    }
}


const solution = (n, arr) => {
    let result = [];
    let answer = [];
    for (let i = 0; i < n; i++) {
        const target = arr[i];
        let sum = getSum(target, 0);
        result.push(sum)
    }
    const max = Math.max(...result);

    for (let i = 0; i < n; i++) {
        if (result[i] === max) {
            answer.push(arr[i])
        }
    }

    return Math.max(...answer);
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

const solution02 = (n, arr) => {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        // let sum = 0, tmp=x;
        // while(tmp){
        //     sum+=tmp%10;
        //     tmp = Math.floor(tmp/10)
        // }
        let sum = x.toString().split('').reduce((a,b)=>a+Number(b),0)
        if(sum>max){
            max = sum;
            answer = x;
        }else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}