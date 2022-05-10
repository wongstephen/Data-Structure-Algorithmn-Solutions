/* describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(deleteNth([20,37,20,21], 1), [20,37,21])
  Test.assertSimilar(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  
    });
  });
   */

  function deleteNth(arr,n){
/*     console.log(arr.filter(e=>e===20).length) //number of occurancees
    console.log(arr.lastIndexOf(20))
    console.log(arr)
    arr.splice(arr.lastIndexOf(20),1)
    console.log(arr) */
    arr.forEach(e=>{
        const countE = arr.filter(i=>i===e).length
        for (let i = 0; i < ; i++) {
            arr.splice(arr.lastIndexOf(e),1)
        }
    })
    console.log(arr)
  }

  deleteNth([20,37,20,21], 1)