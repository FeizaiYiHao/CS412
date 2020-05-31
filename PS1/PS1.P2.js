function GetOp(input) {
    switch (input[1]) {
        case'+' :
            return (left,right) => left + right
        case'-' :
            return (left,right) => left - right
        case'*' :
            return (left,right) => left * right
        case'/' :
            return (left,right) => left / right
    }
}

function  A_Function(input) {return GetOp(input)(parseInt(input[0]),parseInt(input[2]))}
console.log(` 4+2 is: ${A_Function("4+2")}`)
console.log(` 5*7 is: ${A_Function("5*7")}`)
console.log(` 6-1 is: ${A_Function("6-1")}`)
console.log(` 9/2 is: ${A_Function("9/2")}`)