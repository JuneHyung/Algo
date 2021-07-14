
let answer = [];
function solution(tickets) {
    tickets.sort();
    let len = tickets.length;
    let visited = new Array(len).fill(false);
    
    dfs(tickets, "ICN", len, 0, visited)
    return answer[0];
}

function dfs(tickets, start, len, depth, v, arr = []) {
    arr.push(start);
    if (depth == len) {
        answer.push([...arr]);
    } 
    for (var i = 0; i < len; i++) {
        if (!v[i] && tickets[i][0] == start) {
            v[i] = true;
                
                dfs(tickets, tickets[i][1], len, depth + 1, v, arr);
                v[i] = false;
            }
        }
    
    arr.pop();
}


let tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	;
console.log(solution(tickets));