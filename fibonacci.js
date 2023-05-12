function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2)
}

let num = 5;

console.log(fibonacci(num));