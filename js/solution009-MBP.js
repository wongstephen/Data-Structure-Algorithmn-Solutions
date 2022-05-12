// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);


function positiveSum(arr) {
 return arr.length > 0 ? arr.filter(e=>e>0).reduce((a,b)=>a+b) : 0
}


console.log(positiveSum([]))
console.log([2].length)
