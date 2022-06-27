/**
* @param {number} x
* @return {boolean}
*/
    
var isPalindrome = function(x) {
    console.log(x,typeof(x))

    let numStr = '' +x;
    console.log(x,typeof(numStr))

    // converting string to array of alphabates
    let numStrArry = numStr.split("")
    console.log("numStrArry",numStrArry)

    let numStrArryReveresed = numStrArry.reverse();
    console.log("numStrArryReveresed",numStrArryReveresed)

    let reversedNumStr = numStrArryReveresed.join("");
    console.log("reversedNumStr",reversedNumStr,typeof(reversedNumStr))

    return numStr == reversedNumStr;
};
