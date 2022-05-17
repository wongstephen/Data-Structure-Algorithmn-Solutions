/* const alphabetPosition = (text) => {
        const output = [];  
        const alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
        };
        text.toLowerCase().split('').forEach(strLetter => {
            Object.entries(alphabet).forEach((key,value)=> {
                if(strLetter === key[0]) {
                    output.push(key[1])
                }
            })
        });
        return output

}

alphabetPosition("The sunset sets at twelve o' clock.")

 */

//refractored

const alphabetPosition = (text) => {
    let output = [];
    //get array of alphabet letters
    let alphebetObj = {};
    for (i=65; i <= 90; i++) {
        alphebetObj[String.fromCharCode(i).toLowerCase()] = i-64   
    }
    //look through string, if letter matches key in object then push key-value to output arr.
    text.toLowerCase().split('').forEach(strLetter => {
        Object.entries(alphebetObj).forEach((key,value)=> {
            if(strLetter === key[0]) {
                output.push(key[1])
            }
        })
    });
    console.log(output);
    return output;
    }
alphabetPosition("The sunset sets at twelve o' clock.")
