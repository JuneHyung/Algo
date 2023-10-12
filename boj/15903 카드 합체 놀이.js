/**
 * 15903 카드 합체 놀이
 * 카드 n장에 i번 카드에 a가 적혀있다.
 * 1. x번 카드와 y번카드를 골라 그 2장에 쓰인 수를 더한 값을 계산한다.
 * 2. 계산한 값을 x번 카드와 y번 카드 두장 모두에 덮어 쓴다.
 * m번하면 끝난다.
 * m번 후 n장 카드에 쓰인 수를 모두 더한 값이 이 놀이 점수가 된다.
 * 가장 작게 만든 것이 놀이 목표다.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 2',
  '4 2 3 1'
]
const [N ,M] = input.shift().split(' ').map(Number)
const INFO = input.shift().split(' ').map(BigInt)

class MinHeap {
  constructor() {
    this.heap = [BigInt(0)];
  }

// 삭제과정에서 부모가 자식보다 큰 경우 교체
isBiggerThanChildren(idx) {
  // 자식이 존재하는지
  if (this.heap[2 * idx]) {
          return (
              this.heap[idx] > this.heap[2 * idx] ||
              this.heap[idx] > this.heap[2 * idx + 1]
          );
      } 

  else {
      return false;
  }
}


  swapValue(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  insert(value) {
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (currentIdx > 1 && this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swapValue(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  sum(){
      return this.heap.reduce((a, b) => a+b, BigInt(0));
  }

  remove() {
  // 최소 하나는 있는 경우 [0, value]인 경우
    if (this.heap.length > 1) {
    // [0, value] 인 경우 value 리턴
      if (this.heap.length === 2) return this.heap.pop();

      let removedVal = this.heap[1];
      this.heap[1] = this.heap.pop();
      let currentIdx = 1;

      // 우선 자식들이 부모보다 작은 경우
      while (this.isBiggerThanChildren(currentIdx)) {
          if ( this.heap[2 * currentIdx + 1] < this.heap[2 * currentIdx]) {
              // 오른쪽 자식이 존재하고, 오른쪽 자식이 왼쪽 자식보다 작은 경우
              if (this.heap[2 * currentIdx + 1] < this.heap[currentIdx]) {
                  this.swapValue(2 * currentIdx + 1, currentIdx);
                  currentIdx = 2 * currentIdx + 1;
              }
          } else {
              // 왼쪽 자식이 부모보다 작은 경우
              if (this.heap[2 * currentIdx] < this.heap[currentIdx]) {
                  this.swapValue(2 * currentIdx, currentIdx);
                  currentIdx = 2 * currentIdx;
              }
          }
      }

      return removedVal;
    } else return null;
  }
}


const solution = (n, m, info) =>{
  const pq = new MinHeap();
  for(let i=0;i<info.length;i++) pq.insert(BigInt(info[i]))

  for(let i=0; i<m; i++){
    const first = pq.remove();
    const second = pq.remove();
    pq.insert(first+second);
    pq.insert(first+second);
  }

  return pq.sum().toString();
}
console.log(solution(N, M, INFO))