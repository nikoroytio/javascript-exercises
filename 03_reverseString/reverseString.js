const reverseString = function(string) {
    let newString = "" ;
    for (let i = string.length; i >= 0, i--;){
        newString += string[i]
    }

    return newString
};

// Do not edit below this line
module.exports = reverseString;
