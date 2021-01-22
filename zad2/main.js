let year = prompt("Podaj rok który chesz sprawdzić");

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    prompt("Rok jest przestępny")
} else {
    prompt("Rok nie jest przestępny")
}