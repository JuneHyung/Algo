/**
 * 쇼핑습관 : 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관
 * 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매
 * 
 * 가장 짧은 구간의 시작 진열대 번호와 끝 진열대 번호를 차례대로 배열에 담아서 return 
 * 
 */
function solution(gems) {
    const cnt = new Set(gems).size;
    let answer = [1, gems.length]
    let lt=0, rt=0;
    let history = new Map()
    history.set(gems[0], 1)
    
    while(rt<gems.length){
        if(history.size===cnt){
            if(answer[1]-answer[0] > rt-lt){
                answer = [lt+1, rt+1]
            }
            
            history.set(gems[lt], history.get(gems[lt])-1);
            if(history.get(gems[lt])===0) history.delete(gems[lt]);
            lt++;
        }
        else{
            rt++;
            const right = history.get(gems[rt]);
            history.set(gems[rt], right ? right+1 : 1);
        }
    }
    
    return answer;
    
}


// const gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
// const gems = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"];
// const gems = ["A", "A", "A", "B", "B"];
// const gems = ["A"];
const gems = ["A", "B", "B", "B", "B", "B", "B", "C", "B", "A"];
console.log(solution(gems))