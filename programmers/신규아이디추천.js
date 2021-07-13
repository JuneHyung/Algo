function solution(new_id) {
    var answer = '';
    let temp = new_id;
    // step1
    temp = new_id.toLowerCase();
    // console.log(temp);
    // step2
    let regex = /([\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"])/g
    temp = temp.replace(regex, '');
    // console.log(temp);
    
    // step3
    let tArr = Array.from(temp);
    for (var i = 0; i < tArr.length; i++) {
        if (tArr[i] + tArr[i + 1] == "..") {
            tArr.splice(i, 1);
            i--;
        }
    }

    // step4
    for(var i = 0; i < tArr.length; i++){
    if (tArr[0] == '.') tArr.shift()
    }
    for (var i = 0; i < tArr.length; i++) {
            if (tArr[tArr.length - 1] == '.') tArr.pop();
        }

    // step6, step7
    let len = tArr.length;
    if (len == 0) {
        tArr.push('a');tArr.push('a');tArr.push('a');
    } else if (len == 1) {
        tArr.push(tArr[0]); tArr.push(tArr[0]);
    } else if (len == 2) {
        tArr.push(tArr[1]);
    }
    else if (len > 15) {
        tArr.splice(15);
        for (var i = 0; i < tArr.length; i++) {
            if (tArr[tArr.length - 1] == '.') tArr.pop();
        }
    };
   console.log(tArr)
    temp = tArr.join('');    
    console.log(temp, temp.length);

    answer = temp;
    return answer;
}


