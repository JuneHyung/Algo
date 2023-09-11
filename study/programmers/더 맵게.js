/**
 * 왼쪽 자식idx = 부모 *2
 * 오른쪽 자식idx = 부모*2 +1
 * 부모idx = 자식 / 2
 */
class MinHeap {
  constructor(){
    this.heap = [];
  }
  size() {return this.heap.length-1}
  getMin() {return this.heap[0] ? this.heap[0] : null}
  swap(a,b) {
    [this.heap[a], this.heap[b] ] = [this.heap[b], this.heap[a]];
  }

  heappush(val){
    this.heap.push(val)
    let curIdx = this.heap.length-1; // 자식 idx - 마지막에 들어갈거임.
    let parIdx = Math.floor((curIdx/2)); // 부모 idx

    // 위치찾기 - 자식이 더 크면 계속 반복.
    while((curIdx > 0) && (this.heap[parIdx] > this.heap[curIdx])){
      this.swap(parIdx, curIdx); // 자식이 크다면 부모와 자식 위치 변경
      curIdx = parIdx;
      parIdx = Math.floor(curIdx/2);
    }
  }

  // 루트 노드가 항상 먼저 배출되야한다.
  // 배출 후에 생기는 빈자리는 가장 마지막노드, 즉 배열 젤뒤값 가져온다.
  heappop(){
    const min = this.heap[0];
    if(this.heap.length<2) this.heap = []
    else this.heap[0] = this.heap.pop();

    let curIdx = 0;
    let ltIdx = curIdx*2;
    let rtIdx = curIdx*2+1;
    if(!this.heap[ltIdx]) return min; // 왼쪽자식이 없다면, 루트노드만 있다는 뜻.
    else if(!this.heap[rtIdx]) { // 오른쪽이 없다면, 왼쪽 하나만 있다는 것을 의미.
      if(this.heap[ltIdx] < this.heap[curIdx]) this.swap(ltIdx, curIdx);
      return min;
    }

    // 왼쪽자식과 우측 자식이 모두 있는 경우.
    // 좌 우 크기비교.
    while((this.heap[ltIdx] < this.heap[curIdx]) || (this.heap[rtIdx] < this.heap[curIdx])){
      const minIdx = this.heap[ltIdx] > this.heap[rtIdx] ? rtIdx : ltIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      ltIdx = curIdx*2;
      rtIdx = curIdx*2+1
    }

    return min;
  }
}

const solution = (scoville, k) => {
  const minHeap = new MinHeap();
  for(const scovil of scoville){
    minHeap.heappush(scovil)
  }
  // console.log(minHeap)
  let mixedCnt = 0;

  while(minHeap.size()>=1 && minHeap.getMin() < k){
    const first = minHeap.heappop();
    const second = minHeap.heappop();
    const mixed = first + second *2;
    minHeap.heappush(mixed);
    mixedCnt++;
  }
  // console.log(minHeap)
  return minHeap.getMin() >= k ? mixedCnt : -1;
}

const scoville = [1,2,6,3,4,5]
const k = 7
console.log(solution(scoville, k))