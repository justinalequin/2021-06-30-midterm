// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function ageToAbilities(age) {



    if (age < 16) {
        return 'You can\'t drive.'
    }
    if (age === 16 || age === 17) { return 'You can drive but not vote.' }
    if (age >= 18 && age <= 24) { return 'You can vote but not rent a car.' }
    if (age >= 25) { return 'You can do pretty much anything.' }
}

function evenLengthedStrings(array) {
    output = [];
    for (let i = 0; i < array.length; i++) {
        currentWord = array[i]
        if (currentWord.length % 2 === 0) {
            output.push(currentWord)
        }
    } return output
}

function countBs(array) {
    // Counter gets the sum of the occurences of "8s" and adds it through each loop
    let counter = 0;

    // If there's nothing in the array 
    if (array.length === 0) { return 0 };

    // First loop to look at each individual number
    for (let i = 0; i < array.length; i++) {
        currentNumber = array[i]
        theString = currentNumber.toString()
        //  console.log("typeof current number = " + (typeof currentNumber))
        // console.log("typeof theString = " + (typeof theString))
        //console.log("indexOf = " + theString.indexOf("8"))
        // console.log("typeOf = " + (typeof theString.indexOf("8")))

        if (theString.indexOf("8") === 0) {
            counter += 1;
        }
    } return counter
}

function lastIndexOfPunctuation(string) {
let output = -1;
for (const punc of string){
    if (
        punc === '!' ||
        punc === '?' ||
        punc === '.' ||
        punc ==='...'
    ){ output = string.lastIndexOf(punc)}

}
return output    
}

function divisbles(array1, array2) {
    let output = [];
  if (array1.length === 0){return []}
    for (let i = 0; i < array1.length; i++){
        console.log("array1 = "+array1[0])
        console.log("array2 = "+array2[0])
        console.log("array is divisible if equals 0: " + (array1[i] % array2[i]))
        if (array1[i] % array2[i] === 0){
            return [true]
        } else {return [false]}
    }
    
 // return output
 } 

function getLetters() { }

function getCenturies() { }

function gridSum() { }










// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports = {
    ageToAbilities: isDef(typeof ageToAbilities) ? ageToAbilities : pass,
    evenLengthedStrings: isDef(typeof evenLengthedStrings) ? evenLengthedStrings : pass,
    countBs: isDef(typeof countBs) ? countBs : pass,
    lastIndexOfPunctuation: isDef(typeof lastIndexOfPunctuation) ? lastIndexOfPunctuation : pass,
    divisbles: isDef(typeof divisbles) ? divisbles : pass,
    getLetters: isDef(typeof getLetters) ? getLetters : pass,
    getCenturies: isDef(typeof getCenturies) ? getCenturies : pass,
    gridSum: isDef(typeof gridSum) ? gridSum : pass
};
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
