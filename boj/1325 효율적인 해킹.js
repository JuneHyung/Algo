/**
 * 1325 효율적인 해킹
 * N개 컴퓨터로 이루어져 있다.
 * 한번의 해킹으로 여러개 컴퓨터 해킹이 가능하다.
 * 신뢰하는 관계와 신뢰하지 않는 관계가 있는데, A가 B를 신뢰하면 B해킹시 A도 해킹가능.
 * 신뢰관계가 주어졌을때 한 번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호를 출력.
 * 한 번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호를 오름차순 출력.
 * 시간초과
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [info, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map((value) => +value));

const [N, M] = info;

const solution = () => {
    const graph = Array.from({ length: N + 1 }, () => []);

    for (let i = 0; i < M; i++) {
        const [a, b] = input[i];
        graph[b].push(a);
    }

    let max = 0; // 최대 해킹 컴퓨터 수
    let answer = [];

    const DFS = (n) => {
        let check = Array.from({ length: N + 1 }, () => 0);
        let count = 1; // 해킹된 컴퓨터 수
        let stack = [n]; // DFS 탐색 스택

        check[n] = 1;

        while (stack.length) {
            const value = stack.pop();
            for (let i = 0; i < graph[value].length; i++) {
                if (!check[graph[value][i]]) {
                    count += 1;
                    check[graph[value][i]] = 1;
                    stack.push(graph[value][i]);
                }
            }
        }

        if (max > count) return;
        else if (max === count) answer.push(n);
        else {
            max = count;
            answer = [n];
        }
    };

    for (let i = 1; i <= N; i++) {
        DFS(i);
    }

    return answer.join(' ');
};

console.log(solution());