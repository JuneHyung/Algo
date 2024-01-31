/**
 * 호텔 대실
 * 최소한의 객실만을 사용해 예약 손님들을 받으려 한다.
 * 한번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소 후 다음 손님 이용가능.
 * 필요한 최소 객실 수를 리턴
 * 
 * HH:MM형태 00:00 ~ 23:59
 * 자정을 넘어가는경우는X
 * 시작시각은 항상 종료시각보다 빠름
 */ 
const solution = (book_time) => {
  const times = book_time.map(el=>el.map(ele=> ele.split(':')).map(([h, m])=>Number(h)*60 + Number(m)))
  times.sort((a,b)=>{
    if(a[0]>b[0]) return 1;
    else if(a[0]<b[0]) return -1;
    else a[1] - b[1];
  })
  console.log(times)

  const answer = [];
  
  for(let i=0;i<times.length;i++){
    const [st, ed] = times[i];
    if(answer.lnegth===0) answer.push(ed+10);
    else{
      answer.sort((a,b)=>a-b);
      console.log(st, ed, answer)
      let flag= true;
      for(let j=0;j<answer.length;j++){
        if(answer[j] <= st) {
          answer[j] = ed+10;
          flag = false;
          break;
        }
      }
      if(flag) answer.push(ed+10);
    }
  }

  return answer.length;
}

const book_time = 	[["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]
console.log(solution(book_time))