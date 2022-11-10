// 판매원 이름 enroll
// 추천인 referral
// 판매원의 이름 seller
// 판매양 amount
// 이익은 100
// seller 에는 같은 이름이 중복해서 들어있을 수 있습니다.
function solution(enroll, referral, seller, amount) {
  let board = new Map();
  for (let i = 0; i < enroll.length; i++) {// 초기값 세팅
    board.set(enroll[i], { parent: referral[i], price: 0 })
  }

  for (let i = 0; i < seller.length; i++) {
    let cur = seller[i];
    let curPrice = amount[i] * 100;
    while (true) {
      let target = board.get(cur);
      let add = Math.floor(curPrice * 0.1)
      const parent = target.parent;
      const price = target.price + curPrice - add;
      board.set(cur, { parent, price });
      if (parent === '-') break;
      if (add < 1) break;
      cur = parent;
      curPrice = add;
    }
  }
  const answer = [...board.values()].map(el => el.price)
  return answer;
}

const enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"]
const referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"]
const seller = ["young", "john", "tod", "emily", "mary"]
const amount = [12, 4, 2, 5, 10]
console.log(solution(enroll, referral, seller, amount))