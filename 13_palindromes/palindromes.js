const palindromes = function (str) {
    //remove punctuation,spaces,and convert to Lowercase
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g,'');


//reverse string
const reversed = cleaned.split('').reverse().join('');

return cleaned === reversed;

};


// Do not edit below this line
module.exports = palindromes;
