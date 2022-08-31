

const makeGround = (mountain, ground) => {
    const n = ground.length;
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            ground[i][j] = mountain[i - 1][j - 1];
        }
    }
    return ground;
}

const checkGround = (ground) => {
    const n = ground.length;
    let answer = 0;
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (ground[i - 1][j] < ground[i][j] && ground[i + 1][j] < ground[i][j] && ground[i][j - 1] < ground[i][j] && ground[i][j + 1] < ground[i][j]) {
                answer++;
            }
        }
    }
    return answer;
}

const solution = (arr) => {
    const n = arr.length + 2;
    const ground = makeGround(arr, Array.from({ length: n }, () => Array.from({ length: n }, () => 0)));
    const answer = checkGround(ground)
    return answer;
}


let arr = [[5, 3, 7, 2, 3],
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));


// 답지
// dx dy를 두어 굳이 똑같은 배열을 하나 더 안만들어도 됨.
// function solution(arr){  
//     let answer=0;
//     let n=arr.length;
//     let dx=[-1, 0, 1, 0];
//     let dy=[0, 1, 0, -1];
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             let flag=1;
//             for(let k=0; k<4; k++){
//                 let nx=i+dx[k];
//                 let ny=j+dy[k];
//                 if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
//                     flag=0;
//                     break;
//                 }
//             }
//             if(flag) answer++;
//         }
//     }  
      
//     return answer;
// }

// let arr=[[5, 3, 7, 2, 3], 
//          [3, 7, 1, 6, 1],
//          [7, 2, 5, 3, 4],
//          [4, 3, 6, 4, 1],
//          [8, 7, 3, 5, 2]];
// console.log(solution(arr));