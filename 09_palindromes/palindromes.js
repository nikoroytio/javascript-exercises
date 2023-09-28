const palindromes = function (str) {
    const cleanedString = str.toLowerCase().replace(/[â-z0-9]/g, "");
    return cleanedString === cleanedString.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
