function solution(record) {
    let answer = []
    const uids = new Map()

    record.forEach(entry => {
        let [command, uid, nick] = entry.split(' ')
        if (command === 'Enter' || command === 'Change') uids.set(uid, nick)
    })

    record.forEach(entry => {
        let [command, uid] = entry.split(' ')
        if (command === 'Enter') answer.push(`${uids.get(uid)}님이 들어왔습니다.`)
        if (command === 'Leave') answer.push(`${uids.get(uid)}님이 나갔습니다.`)
    })

    return answer
}

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
console.log(solution(record));