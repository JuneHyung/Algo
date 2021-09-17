function solution(a) {
    let answer = 0;
    let cnt = a.reduce((acc,cur)=>{
        acc[cur] ? acc[cur][1]++ : acc[cur] = [cur,1];
        return acc;
    },[])
    .filter(el=>{return el}).sort((a,b)=>b[1]-a[1]);

    console.log(cnt)
    for(let i=0;i<cnt.length;i++){
        if(answer >= cnt[i][1])continue;
        let count = 0;
        for(let j=0;j<a.length;j++){
            if(a[j+1]==undefined) continue;
            if(a[j]==a[j+1]) continue;
            if(a[j] !=cnt[i][0] && a[j+1] != cnt[i][0]) continue;
            count++;
            j++;
        }
        answer = Math.max(answer, count);
    }

    return answer*2;
}
let a = [5,2,3,3,5,3];
console.log(solution(a));