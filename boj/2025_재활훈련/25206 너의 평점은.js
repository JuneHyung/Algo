/**
 * 25206 너의 평점은
 * 전공평점은 과목별 (학점 x 과목평점)의 합을 학점의 총합으로 나눈 값
 * P/F는 P또는 F며 P인 과목은 계산에서 제외
 * 
 * 20줄에 걸쳐 과목명 학점 등급이 공백으로 주어진다.
 * 
 * 전공평점을 출력한다.
 * 
 * 정답과의 절대오차 또는 상대오차가 10의 -4이하면 정답으로 인정.
 * 
 * 과목명길이는 50자이하. 
 * 학점은 1.0, 2.0, 3.0, 4.0중 하나
 * 등급은 A+, A0, B+, B0, C+, C0, D+, F, P중 하나
 * 적어도 한 과목은 등급이 P가 아님이 보장됨.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  'ObjectOrientedProgramming1 3.0 A+',
  'IntroductiontoComputerEngineering 3.0 A+',
  'ObjectOrientedProgramming2 3.0 A0',
  'CreativeComputerEngineeringDesign 3.0 A+',
  'AssemblyLanguage 3.0 A+',
  'InternetProgramming 3.0 B0',
  'ApplicationProgramminginJava 3.0 A0',
  'SystemProgramming 3.0 B0',
  'OperatingSystem 3.0 B0',
  'WirelessCommunicationsandNetworking 3.0 C+',
  'LogicCircuits 3.0 B0',
  'DataStructure 4.0 A+',
  'MicroprocessorApplication 3.0 B+',
  'EmbeddedSoftware 3.0 C0',
  'ComputerSecurity 3.0 D+',
  'Database 3.0 C+',
  'Algorithm 3.0 B0',
  'CapstoneDesigninCSE 3.0 B+',
  'CompilerDesign 3.0 D0',
  'ProblemSolving 4.0 P',
]

const N = 20;
const attendClassList = input.map(el => el.split(' '));

const solution = (n, attendClassList) => {
  const grade = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'P': 0.0,
    'F': 0.0
  }

  const sum = attendClassList.map(([_className, credit, score]) => Number(credit) * grade[score]).reduce((a, c) => a + c, 0);

  const totalCredit = attendClassList.map(([_className, credit, score]) => score !== 'P' ? Number(credit) : 0).reduce((a, c) => a + c, 0)


  const average = (sum / totalCredit).toFixed(6);

  return average;
}

console.log(solution(N, attendClassList));