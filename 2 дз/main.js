// ДЗ 2
// Задача 1
let age = parseInt(prompt("Введите ваш возраст:"));

if (age < 65) {
  console.log("Вам ещё рано на пенсию");
} else {
  console.log("Поздравляем с пенсионным возрастом!");
}

// Задача 2
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

if (num1 > num2) {
  console.log("Первое число больше");
} else if (num1 < num2) {
  console.log("Второе число больше");
} else {
  console.log("Числа равны");
}

// Задача 3
let number = parseInt(prompt("Введите число:"));

if (number % 2 === 0) {
  console.log("Это чётное число");
} else {
  console.log("Это нечётное число");
}
