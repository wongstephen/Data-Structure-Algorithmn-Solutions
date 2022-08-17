// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  const result =[]
  data.forEach(member=>{
    member[0]>54 && member[1]>7 ? result.push('Senior') : result.push('Open')
  })
  return result
}
