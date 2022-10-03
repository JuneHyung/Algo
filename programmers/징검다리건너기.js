const checkStone =(stones, mid, k) => {
  let cnt = 0;
  for(let i=0;i<stones.length;i++){
    const target = stones[i];
    if(target<=mid){
      cnt++;
    }else{
      cnt = 0;
    }
    if(cnt>=k) return false;
  }
  return true;
}

function solution(stones, k) {
  let arr = [...new Set(stones)].sort((a,b) => a-b);
  let lt = 0
  let rt = 2000000

  while(lt<=rt){
    let mid = parseInt((lt+rt)/2);
    // console.log(lt, rt)
    // console.log(mid)
    // console.log(checkStone(stones, mid, k));
    if(checkStone(stones, mid, k)){
      lt = mid+1;
    }else{
      rt = mid-1;
    }
  }
  return lt;
}

let stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
let k =3;
console.log(solution(stones, k))