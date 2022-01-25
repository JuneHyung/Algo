function solution(id_list, report, k) {
  var answer = [];
  const cnt = id_list.length;

  let idList = {};
  resetIdList(idList, id_list, cnt);


  let checkList = {};
  setCheckList(checkList, id_list, cnt);
  makeCheckList(checkList, report, cnt);
  countReport(idList, checkList, cnt);


  let banList = [];
  makeBanList(banList, idList, id_list, cnt, k);
  
  resetIdList(idList, id_list, cnt);
  countBanResponse(idList, checkList, banList,report);


  answer = Object.values(idList)

  return answer;
}

function countBanResponse(idList, checkList, banList){
  const keyList = Object.keys(checkList);

  for(let i=0;i<keyList.length;i++){
    const key = keyList[i];
    const item = [...checkList[key]]
    for(let j=0;j<banList.length;j++){
      if( item.indexOf(banList[j])!=-1){
        idList[key] += 1;
      }
    }
  }
}
function makeBanList(banList, idList, id_list, cnt, k){
  for(let i=0;i<cnt;i++){
    if(idList[id_list[i]] >= k){
      banList.push(id_list[i])
    }
  }
}

function countReport(idList, checkList){
  const keyList = Object.keys(checkList);
  
  for(let i=0;i<keyList.length;i++){
    const key = keyList[i];
    const item = [...checkList[key]]
    for(let j=0;j<item.length; j++){
      idList[item[j]] += 1;
    }
  }
}

function makeCheckList(checkList, report){
  for(let i=0;i<report.length;i++){
    const fst = report[i].split(' ')[0];
    const scd = report[i].split(' ')[1];
    checkList[fst].add(scd);
  }
}

function setCheckList(checkList, id_list, cnt){
  for(let i=0;i<cnt;i++){
    checkList[id_list[i]] = new Set();
  }
}
function resetIdList(idList, id_list, cnt){
  for(let i=0;i<cnt;i++){
    idList[id_list[i]] = 0;
  }
}


const id_list= ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;
console.log(solution(id_list, report, k) );
