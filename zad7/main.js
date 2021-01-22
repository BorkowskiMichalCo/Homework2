function Stars(n) {
    function printStars(count = n) {
        console.log("*" + " *".repeat(count - 1));
    }

    for (let i = 1; i <= n; i++) {
        console.log("*" + " *".repeat(n - 1));
        printStars();
    }
}

let x = parseInt(prompt("Podaj liczbe gwiazdek"),10)
Stars(x);