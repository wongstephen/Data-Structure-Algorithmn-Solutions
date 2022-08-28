/* describe("maskify", function(){
    it("should work for some examples", function(){
      Test.assertEquals(maskify('4556364607935616'), '############5616');
      Test.assertEquals(maskify('1'), '1');
      Test.assertEquals(maskify('11111'), '#1111');
    });
  }); */

  function maskify(cc) {
     if (cc.length <= 4 ) {
         return cc
     } else {
         let output = []
         let arr = cc.split('')
        for (let i = 0; i<arr.length-4;i++) {
            output.push('#')
        }
        for (let i = arr.length-4; i<arr.length; i++) {   
            output.push(arr[i])
        }
        return output.join('')
     }
    }

    console.log(maskify('4556364607935616'))