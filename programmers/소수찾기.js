function solution(numbers) {
    var answer = 0;

    var n = numbers.split('');
    var nums = new Set()
    // console.log(nums);

    combi(n, '');
    
    function combi(a, s) {
        if (s.length > 0) {
            // console.log(`s : ${s}`);
            if (nums.has(Number(s))=== false) {
                nums.add(Number(s));
                // console.log(Number(s))
                if (chkPrime(Number(s))) {
                    answer++;
                }
            }
            // console.log(nums);
            // console.log();
        }
        if (a.length > 0) {
            for (var i = 0; i< a.length; i++) {
                var t = a.slice(0)
                // console.log(`before t : ${t}`)
                t.splice(i,1);
                // console.log(`after t : ${t}`)
                combi(t, s + a[i]);
                
            }
        }
    }

    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (var i = 2; i < num; i++) {
            if (num%i===0) return false;
        }
        return true;
    }

    return answer;
}
let numbers = "17";
console.log(solution(numbers));