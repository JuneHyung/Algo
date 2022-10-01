const solution = (s) => { 
	let arr = [];
	const LEFT = '(', RIGHT = ')';
	for (let i = 0; i < s.length; i++) { 
		if (s[i] === LEFT) arr.push(s[i]);
		else { 
			if (arr.length === 0) return "NO";
			arr.pop();
		}
	}
	console.log(arr)
	return arr.length===0 ? 'YES' : 'NO';
}

// let a="(()(()))(()";
// let a="()()(";
let a="(()()";
console.log(solution(a));