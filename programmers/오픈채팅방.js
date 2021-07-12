// 모든 유저는 [유저 아이디]로 구분한다.
// [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
// [유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" (ex. "Leave uid1234")
// [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
// 첫 단어는 Enter, Leave, Change 중 하나이다.
// 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
// 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
// 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
// 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.


function solution(record) {
    let answer = [];
    let user = {};
    let result = [];
    for (var i = 0; i < record.length; i++) {
        let temp = record[i].split(' ');
        let str = '';
        switch (temp[0]) {
            case 'Enter':
                str = `${temp[1]}님이 들어왔습니다.`
                user[temp[1]] = temp[2];
                answer.push(str);
                break;
            case 'Leave':
                str = `${temp[1]}님이 나갔습니다.`
                answer.push(str);
                break;
            case 'Change':
                user[temp[1]] = temp[2];
                break;
        }
        
        if (i == record.length - 1) {
            for (var j = 0; j < answer.length; j++) {
                let uid = answer[j].split('님')[0];
                result.push(answer[j].replace(uid, user[uid]));
                
            }
        }
        
    }
   
    answer = Array.from(result);
    console.log(typeof answer);
    return answer;
}

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
console.log(solution(record));