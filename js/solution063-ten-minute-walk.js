function isValidWalk(walk) {
  //insert brilliant code here
  const obj = {
    n: 0,
    e: 0,
    s: 0,
    w: 0
  }
  walk.forEach(dir=>{
    obj[dir] += 1
  })
  if (walk.length !== 10) {return false}
  if (obj.n-obj.s===0 && obj.e-obj.w===0) {return true}
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
