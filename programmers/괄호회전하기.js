function solution(s) {
    let stack = Array.from(s);
    var answer = 0;
    
    for (let i = 0; i < stack.length; i++) {
        let st = [];
        for (let j = 0; j < stack.length; j++) {
            st.push(stack[j]);
            console.log(`before : ${st}`);
            if ((st[st.length - 2] === "(" && st[st.length - 1] === ")") ||
                (st[st.length - 2] === "{" && st[st.length - 1] === "}") ||
                (st[st.length - 2] === "[" && st[st.length - 1] === "]")) {
                st.pop();
                st.pop();
            }
            console.log(`after : ${st}`);
        }
        if (st.length == 0) answer++;
        //console.log(answer);
        let first = stack.shift();
        stack.push(first);
        //console.log(stack.toString())
    }
    return answer;
}
let s = "[](){}";
console.log(solution(s));