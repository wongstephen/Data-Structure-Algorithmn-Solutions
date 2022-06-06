//turned all strings in to camcel casing

function solution (str) {
	const arr = str.split(' ');
	if (arr.length===1){
		return str
	} else {
		const output = []
		output.push(arr.shift())
		arr.forEach(el => {
			output.push(el.charAt(0).toUpperCase() + el.slice(1))
		})
		return output.join(' ')
	}
}

console.log(solution('test test2 test3'))