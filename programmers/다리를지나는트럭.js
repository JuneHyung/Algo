function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let load = new Array(bridge_length).fill(0);
    truck_weights = truck_weights.reverse();
    
    let sum = 0;
    
    while (true) {
        let loadV = load.shift();
        sum -= loadV;
        let truck = truck_weights.pop();
        if ((sum + truck) > weight) {
            load.push(0);
            truck_weights.push(truck);
        } else {
            load.push(truck);
            sum += truck;
        }
        answer++;
        if (truck_weights.length == 0) {
            answer += bridge_length;
            break;
        }

    }

    return answer;
}
let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));