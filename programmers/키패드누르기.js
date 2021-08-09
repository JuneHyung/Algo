
const phone = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
}
function solution(numbers, hand) {
    let leftH = '*';
    let rightH = '#';
    let answer = '';
    let len = numbers.length;
    for (let i = 0; i < len; i++) {
        switch (numbers[i]) {
            case 1: case 4: case 7:
                answer += 'L';
                leftH = numbers[i];
                break;
            case 3: case 6: case 9:
                answer += 'R';
                rightH = numbers[i];
                break;
            case 2: case 5: case 8: case 0:
                let arrow = calculate(numbers[i], leftH, rightH, hand);
                answer += arrow;
                arrow == 'R' ? rightH = numbers[i] : leftH = numbers[i];
                break;
        }
    }

    
    return answer;
}
function calculate(number, leftH, rightH, hand) {
    let middle = phone[number];
    let left = phone[leftH];
    let right = phone[rightH];
    hand == 'left' ? hand = 'L' : hand = 'R';
    let left_distance = Math.abs(left[0] - middle[0]) + Math.abs(left[1] - middle[1]);
    let right_distance = Math.abs(right[0] - middle[0]) + Math.abs(right[1] - middle[1]);
    console.log(`l : ${left_distance}, r : ${right_distance}`)
    if (left_distance > right_distance) return 'R';
    else if (left_distance < right_distance) return 'L';
    else return hand;
}
// let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// let hand = "right";
let numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand = "left";
console.log(solution(numbers, hand));
/*
1 2 3
4 5 6
7 8 9
* 0 #
*/
