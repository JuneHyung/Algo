const solution = (arr) =>{
    const filtered=arr.filter(el=>el%2===1);
    const sum = filtered.reduce((acc,cur)=> acc+cur);
    const min = Math.min(...filtered);
    return [sum, min];
}

// ▣ 입력예제 1 
// 12 77 38 41 53 92 85
// ▣ 출력예제 1
// 256
// 41
arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));