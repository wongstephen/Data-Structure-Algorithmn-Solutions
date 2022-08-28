function sortArray(array) {
    // Return a sorted array.
    array === [] && []
    const oddArr = array.filter(num=> num%2 !== 0).sort()
    let output = array.map(num=> num%2!==0 ? oddArr.shift() : num )
    return output

}
console.log(sortArray([5, 3, 2, 8, 1, 4]))
// sortArray([5, 3, 2, 8, 1, 4]) // expect: [1, 3, 2, 8, 5, 4]
// sortArray([5, 3, 1, 8, 0]) // expect: [1, 3, 5, 8, 0]
// sortArray([]) // expect: []