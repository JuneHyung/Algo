const solution = (s)=>{
    let answer=s.split('').filter(el=>el.charCodeAt() >=65 && el.charCodeAt()<=90).length
    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));