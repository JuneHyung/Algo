/**
 * 개인정보 수집 유효기간
 * 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.
 * 오늘날짜 today
 * 약관 유효기간 terms
 * 수집된 개인정보의 정보를 담은 privacies
 * 파기할 개인정보의 번호를 오름차순으로 리턴
 * 
 * today는 YYYY.MM.DD
 * 
 * terms는 [약관 종류, 기간]
 * 약관종류는 중복되지 않음, 기간은 1~100
 * 
 * privacies [수집일자, 약관종류]
 * 수집일자는 today이전의 날짜만 나옴.
 * DD는 1~28
 * 
 * 파기할 개인정보가 하나 이상 존재하는 입력만 주어짐
 */
const solution = (today, terms, privacies) => {
  const [t_YY, t_MM, t_DD] = today.split('.').map(Number);
  const Terms = {}
  for(const [kind, term] of terms.map(el=>el.split(' '))){
    Terms[kind] = Number(term);
  }

  const splittedPrivacies = privacies.map(p=>p.split(' '))

  const answer = [];

  const check = (y, m ,d) => {
    if(t_YY<y) return true;
    else if(t_YY===y && t_MM<m) return true;
    else if(t_YY===y && t_MM===m && t_DD<d) return true;
    else return false;
  }

  for(let i=0; i< splittedPrivacies.length; i++){
    const [date, pType] = splittedPrivacies[i];
    const [c_YY, c_MM, c_DD] = date.split('.').map(Number)
    let n_YY = c_YY;
    let n_MM = c_MM + Terms[pType];
    let n_DD = c_DD;

    if(n_MM > 12){
      if(n_MM%12===0) {
        n_YY += Math.floor(n_MM/12)-1
        n_MM = 12;
      }else{
        n_YY += Math.floor(n_MM/12);
        n_MM = n_MM%12;
      }
    }
    const f = check(n_YY, n_MM, n_DD);
    if(!f) answer.push(i+1)
  }

  return answer;
}

const today = "2022.05.19"
const terms = ["A 6", "B 12", "C 3"]
const privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	
console.log(solution(today, terms, privacies))