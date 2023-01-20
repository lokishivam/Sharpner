function multiply(x, y){
    return x*y;
}

const multiplyByTwo = multiply.bind(this, 3);

console.log(multiplyByTwo(2));
