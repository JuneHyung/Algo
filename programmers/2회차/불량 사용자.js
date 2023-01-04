/* 불량 사용자 */
const dfs = (user_id, banned_id, ban, arr) => {
  if (banned_id.length === 0) arr.push(ban);
  else {
    for (let i = 0; i < user_id.length; i++) {
      if (checkMatch(user_id[i], banned_id[0])) {
        dfs([...user_id.slice(0, i), ...user_id.slice(i + 1)], banned_id.slice(1), [...ban, user_id[i]], arr)
      }
    }
  }
}

const checkMatch = (user, banned) => {
  const uLen = user.length;
  const bLen = banned.length;
  let chk = 0;
  if (uLen !== bLen) return false;
  for (let i = 0; i < bLen; i++) {
    if (banned[i] === '*' || banned[i] === user[i]) chk++;
    else return false;
  }
  if (chk === bLen) return true;
}

const solution = (user_id, banned_id) => {
  let answer = 0;
  let arr = [];
  dfs(user_id, banned_id, [], arr);
  console.log(arr)

  let tmp = [];
  arr.forEach(el => {
    tmp.push(el.sort().join())
  })
  console.log(tmp);
  answer = new Set(tmp).size;
  return answer;
}

const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
const banned_id = ["fr*d*", "abc1**"];
console.log(solution(user_id, banned_id));