//Complementary DNA
function DNAStrand(dna){
    let output = []
    dna.split('').forEach(e=>{
      e=='A' && output.push('T')
      e=='T' && output.push('A')
      e=='G' && output.push('C')
      e=='C' && output.push('G')
    })
    return output.join('')
  }