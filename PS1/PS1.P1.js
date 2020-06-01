const A_Function = ret => ret.split('').sort().join('')
module.exports = A_Function
console.log(`New string is: ${A_Function("supercalifragilisticexpialidocious")}`)