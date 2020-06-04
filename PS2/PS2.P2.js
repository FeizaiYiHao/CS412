function* gen(sentence){
    let arr = sentence.split(' ')
    for (let i=0;i<arr.length;i++){
        yield arr[i]
    }
}
const generator = gen("All I know is something like a bird within her sang");

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
