const palindromes = function (str) {
    let reverseString=str.toLowerCase().replace(/(\s|[.,!])/g,"").split("").reverse().join("");
    return reverseString==str.toLowerCase().replace(/(\s|[.,!])/g,"");
};

// Do not edit below this line
module.exports = palindromes;
