// const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1]
// const uniqueArr = [... new Set(arr)]
// const obj = {}
// for (let i = 0; i<arr.length; i++) {
//     const countArr = arr.filter(e => e == uniqueArr[i]) //count occurances
//     obj[uniqueArr[i]] = countArr.length
//     if (countArr.length % 2 != 0) {
//         return uniqueArr[i]
//     }
// }
// console.log(uniqueArr)
// console.log(obj)

function findOdd(A) {
    const uniqueArr = [... new Set(A)]
    for (let i = 0; i<A.length; i++) {
        const countArr = A.filter(e => e == uniqueArr[i])
        if (countArr.length % 2 != 0) {
            return uniqueArr[i]
        }
    }
  }
  findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ])