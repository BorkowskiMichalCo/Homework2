let word1 = prompt("Podaj pierwsze slowo");
let word2 = prompt("Podaj drugie słowo");

if (word1.length == word2.length) {
    let isAnagram = function (word1, word2) {
        let sorted1 = word1.split('').sort().join().toLowerCase();
        let sorted2 = word2.split('').sort().join().toLowerCase();
        return (sorted1 === sorted2)
    }
    alert(isAnagram(word1, word2))

} else {
    alert("Podane słowa mają rózną długość")
}