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
    for (const punc of string) {
        if (
            punc === '!' ||
            punc === '?' ||
            punc === '.' ||
            punc === '...'
        ) { output = string.lastIndexOf(punc) }

    }
    return output
}

function divisbles(array1, array2) {
    let output = [];
    if (array1.length === 0) { return [] }
    for (let i = 0; i < array1.length; i++) {
        //console.log("array1 = "+array1[i])
        // console.log("array2 = "+array2[i])
        //console.log("array is divisible if equals 0: " + (array1[i] % array2[i]))
        if (array1[i] % array2[i] === 0) {
            output.push(true)
        } else { output.push(false) }
    }
    //console.log("output = " + output)  
    return output

}

function getLetters(array, indexPoint) {
    let output = '';
    //console.log("******** START ********************")
    //console.log("array = "+array)
    if (array.length === 0) {
        //console.log('');
        return ''
    }
    for (const string of array) {
        if (string.length - 1 < indexPoint) {
            // console.log('-')
            output += '-'
        }
        if (string.length > indexPoint) {
            // console.log("idnexPoint = " +indexPoint)
            //console.log("string @ indexPoint = "+ string[indexPoint])
            output += (string[indexPoint])
        }


        //console.log("output ="+output)  
    }
    //console.log("******** END ********************")
    return output


}

function getCenturies(array) {
    let output = []
    //console.log("--------Array----------" + array)
    for (let i = 0; i < array.length; i++) {
      
        let year = array[i]
        let stringYear = year.toString()

        if (stringYear.length <= 2) {
            output.push('1st')
            //i++
        }
        //console.log(stringYear[0])
        let firstStringYear = (Number(stringYear[0]) + 1);
        let firstStringYear2 = firstStringYear.toString()
       // console.log(firstStringYear)

        if (firstStringYear === 2 && stringYear.length === 3) {
            output.push("2nd");
          //  i++;

        }
        if (firstStringYear === 3 && stringYear.length === 3) {
            output.push("3rd");
          // i++;
        }
        if (stringYear.length === 3 && firstStringYear >=4) {
            output.push(firstStringYear2 + "th");
            //i++;
        }
        let dec = (stringYear[0] + stringYear[1])
        let decade = Number(dec) + 1;
        let decade2 = decade.toString()
        if (decade === 21) {
            output.push(decade2 + "st");
            //i++;
        }
        if (stringYear.length === 4 && decade !== 21) {
            let decadeFinal = decade2 + "th"
            output.push(decadeFinal);
           // i++;

        }




            //console.log(output)
            //console.log(year)
            //console.log(typeof year)
            // console.log(stringYear)
            //console.log(typeof stringYear)
            //console.log(stringYear[0] + stringYear[1])
            // console.log(decade)
            // console.log(decadeFinal)
            // console.log("output " +output)
            //console.log("")
            //console.log("")
            // console.log("3333333333333333333333333333333333333333333333333333333333333333333")
        
       // console.log(output)
    } return output

}

//function gridSum() { }










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
