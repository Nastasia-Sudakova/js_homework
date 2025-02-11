// Задача 1
let str = "abcde";

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

// Задача 2
let a = parseFloat(prompt("Первое число:"));
let b = parseFloat(prompt("Второе число:"));

if (a > 0 || b > 0) {
  console.log(true);
} else {
  console.log(false);
}

// Задача 3
let age = parseInt(prompt("Твой возраст:"));

if (age >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
}
