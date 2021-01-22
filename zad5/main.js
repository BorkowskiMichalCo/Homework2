function Palindrome() {
    const arrValue = word.split('');
    const reversArrValue = arrValue.reverse();
    const reversString = reversArrValue.join('');
   
    if (word == reversString) {
        alert("Podane słowo jest palindromem")
    } else {
        alert("Podane słowo nie jest palindromem")
    }
}
const word = prompt("Podaj słowo do sprawdzenia");


Palindrome(word)