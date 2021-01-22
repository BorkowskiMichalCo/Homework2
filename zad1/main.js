 let numbers = prompt("Podaj liczby po przecinku")

 const arrNumbers = numbers.split(',')
console.log(arrNumbers);
 let filtredArr = arrNumbers.filter(function (item) {
     return (!isNaN(item));
 });

 let sum = 0;
 for (let i = 0; i < filtredArr.length; i++) {
     sum += parseInt(filtredArr[i]);
 }
 console.log(`Twoja średnia wazona wynosi ${sum/filtredArr.length}`)