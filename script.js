function fibonacci(n) {
    const fibSeries = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibSeries.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fibSeries;
}

function main() {
    while (true) {
        const input = prompt("Enter the number of terms in the Fibonacci sequence (less than 100):");
        const n = parseInt(input);
        if (isNaN(n)) {
            alert("Error: Please enter an integer.");
        } else if (n >= 100) {
            alert("Error: Please enter a number less than 100.");
        } else if (n <= 0) {
            alert("Error: Please enter a positive number.");
        } else {
            const fibSeries = fibonacci(n);
            alert("Fibonacci Sequence:\n" + fibSeries.join(", "));
            break;
        }
    }
}

main();
