function* F() {
    let index_1 = 0;
    let index_2  = 1;
    while (true) {
        yield index_1
        let tmp = index_1
        index_1 = index_2
        index_2 = tmp + index_2
    }
}

function* Odd() {
    const generator = F();
    while (true) {
        let tmp = generator.next().value
        if(tmp%2==0) {
            yield tmp
        }

    }
}


const generator = Odd(); // "Generator { }"

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


