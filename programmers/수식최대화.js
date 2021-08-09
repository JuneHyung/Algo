function solution(expression) {
    let signArr = [
        ['*','+','-'],
        ['*','-','+'],
        ['+','*','-'],
        ['+','-','*'],
        ['-','*','+'],
        ['-','+','*'],
    ]
    let answer = 0;
    let arr = expression.split("");
    console.log(arr);
    let numbers = [];
    let signs = [];
    let tmp = '';
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el == '*' || el == '+' || el == '-') {
            numbers.push(parseInt(tmp));
            signs.push(el);
            tmp = '';
        }
        else tmp += el;
        cnt++;
        if (cnt == arr.length) numbers.push(parseInt(tmp));
    }
    

    for (let i = 0; i < 6; i++) {
        let copyNumbers = Array.from(numbers);
        let copySigns = Array.from(signs);
        
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < copySigns.length; k++) {
                if (copySigns[k] == signArr[i][j]) {
                    switch (copySigns[k]) {
                        case '*':
                            // console.log(copySigns, copyNumbers)
                            copyNumbers[k] *= copyNumbers[k + 1];
                            copyNumbers.splice(k + 1, 1);
                            copySigns.splice(k, 1);
                            // console.log(`* : ${copyNumbers}`);
                            k--;
                            break;
                        case '-':
                            // console.log(copySigns, copyNumbers)
                            copyNumbers[k] -= copyNumbers[k + 1];
                            copyNumbers.splice(k + 1, 1);
                            copySigns.splice(k, 1);
                            // console.log(`- : ${copyNumbers}`);
                            k--;
                            break;
                        case '+':
                            // console.log(copySigns, copyNumbers)
                            copyNumbers[k] += copyNumbers[k + 1];
                            copyNumbers.splice(k + 1, 1);
                            copySigns.splice(k, 1);
                            // console.log(`+ : ${copyNumbers}`);
                            k--;
                            break;
                    }
                }
            }
        }
        
        answer = Math.max(Math.abs(copyNumbers[0]), answer);
        
    }
    
    
    
    return answer;
}
let expression = "100-200*300-500+20";
console.log(solution(expression));