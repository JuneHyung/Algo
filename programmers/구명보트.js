function solution(people, limit) {

    people.sort((a, b) => b - a);
    var answer = 0;
    let front = 0;
    let back = people.length -1;
    while (front < back) {
        if (people[front] + people[back] <= limit) {
            front++;
            back--;
        } else {
            front++;
        }
        if (front == back) answer++;
        answer++;
    }

    return answer;
}
let people = [70, 50, 80, 50];
// let people = [70, 50, 80];
let limit = 100;
console.log(solution(people, limit))