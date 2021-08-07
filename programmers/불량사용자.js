function solution(user_id, banned_id) {
    dfs(user_id, banned_id, []);
    let temp = [];
    arr.forEach(el => {
        temp.push(el.sort().join());
    })
    console.log(new Set(temp))
    let answer = new Set(temp).size
    return answer;
}
let arr = [];
function dfs(user_id, banned_id, ban) {
    // console.log(`user : ${user_id}, ban : ${banned_id}, ban : ${ban}`);
    if (banned_id.length == 0) { arr.push(ban);}
    else {
        for (let i = 0; i < user_id.length; i++) {
            if (match(user_id[i], banned_id[0])) {
                dfs([...user_id.slice(0, i), ...user_id.slice(i + 1)], banned_id.slice(1), [...ban, user_id[i]])
            }
        }
    }
}
function match(userid, banid) {
    let u_len = userid.length;
    let b_len = banid.length;
    let chk = 0;
    if (u_len != b_len) return false;
    for (let i = 0; i < b_len; i++) {
        if (banid[i] == '*' || banid[i] == userid[i]) chk++;
        else return false;
    }
    if(chk==b_len) return true;
}
let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
let banned_id = ["*rodo", "*rodo", "******"];
console.log(solution(user_id, banned_id));