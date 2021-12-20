// Write your code below this line

//Instructions- Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm
//The number in the string represents how many characters each letter should shift.

function cipher (string) {
    let alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`,`u`, `v`, `w`, `x`, `y`, `z`]
    let shift = parseInt(string)
    let answerArr = []
    // console.log(shift)
    let stringArray = Array.from(string)
    // console.log(stringArray)
    for (let i = 0; i < alphabet.length; i++)
    for (let j = 1; j < stringArray.length; j++)
    if (stringArray[j] === alphabet[i]) {
        answerArr.push(alphabet[i + shift])
    }
    let answerStr = answerArr.join(``)
    console.log(answerStr)

}


cipher(`1abc`)
cipher(`2abc`)
cipher(`11abc`)
cipher(`3ce`)
//cipher(`2fcjjm`)

// problem - - code fails when letters are not in ascending alphabetical order. for ex - "2fcjjm" returns "ehllo" instead of "hello"

// going further - how would one be able to wrap through the aplhabet if given a "shift" value which would make the letter go past the end of the alphabet (ex. 1xyz would return yz undefined as currently written)
