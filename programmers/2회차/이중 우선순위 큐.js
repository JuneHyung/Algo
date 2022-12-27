/*이중 우선순위 큐*/
function solution(operations) {
  let answer = [];
  for (let i = 0; i < operations.length; i++) {
    const [order, value] = operations[i].split(' ');
    switch (order) {
      case 'I':
        answer.push(Number(value));
        break;
      case 'D':
        if (answer.length !== 0) {
          const target = value === '1' ? Math.max(...answer) : Math.min(...answer);
          const idx = answer.indexOf(target);
          answer.splice(idx, 1);
        }
        break;
    }
  }
  // console.log(answer)
  const result = answer.length === 0 ? [0, 0] : [Math.max(...answer), Math.min(...answer)];
  return result;
}

// const operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]; // [0, 0]
const operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]; // [333, -45]
console.log(solution(operations));