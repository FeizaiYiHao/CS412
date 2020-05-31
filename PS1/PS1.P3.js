function A_Function(input_str,input_lambda) {
    return input_lambda(input_str)
}
const expression = A_Function("supercalifragilisticexpialidocious", function (ret) {ret = ret.split('c');let i;for( i = 1; i<ret.length;i++)  {ret[i] = 'c'+ ret[i]}return ret})

const expression1 = A_Function("supercalifragilisticexpialidocious", function (ret) {let i;let ret1 = ret;let n = 0;for(i = 0; i<ret1.length;i++)  { if(ret1[i] == 'a') {ret1[i] = 'A';n = n+1;}}return {originalString: ret,modifiedString: ret1,numberReplaced: n,length:		 	 ret.length}})


console.log(expression)
console.log(expression1)