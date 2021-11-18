// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let num
// function f1(a, b, c) {
//     for (let i = 0; i < arguments.length; i++) {
//         num = arguments[0]
//         if (num > arguments[i]) num = arguments[i]
//     }
//     return num
// }
//
// let min = f1(1, 2, 3)// почему не работает со стрелочной функцией???
// console.log(min)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let num
// function f1(a, b, c) {
//     for (let i = 0; i < arguments.length; i++) {
//         num = arguments[0]
//         if (num < arguments[i]) num = arguments[i]
//     }
//     return num
// }
//
// let max = f1(1, 2, 3)// почему не работает со стрелочной функцией???
// console.log(max)

// - створити функцію яка повертає найбільше число з масиву
// const arr = [22, 44, 55, 66]
// let max = arr[0]
// f2 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) max = array[i]
//     }
//     return max
// }
// let result = f2(arr)
// console.log(result)

// - створити функцію яка повертає найменьше число з масиву
// const arr = [43, 33, 56, 23, 76, 45]
// let min = arr[0]
// f3 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) min = array[i]
//     }
//     return min
// }
// let result = f3(arr)
// console.log(result)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const arr = [12, 23, 45, 57, 87, 34, 23]
// let sum = 0
// f4 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i]
//     }
//     return sum
// }
// let result = f4(arr)
// console.log(result)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const arr = [12, 23, 45, 57, 87, 34, 23]
// let sum = 0
// f4 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i]
//     }
//     return sum / array.length
// }
// console.log(f4(arr))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let min
// let max
// function f5(a, b, c) {
//     min = arguments[0]
//     max = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) min = arguments[i]
//     }
//     for (let i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]) max = arguments[i]
//     }
//     console.log(max)
//     return  min
//
// }
//
// let result = f5(1, 2, 3)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його
// const arr = []
// f5=(array, iter)=>{
//     for (let i = 0; i < iter; i++) {
//         array.push(Math.floor(Math.random()*100))
//     }
// }
// f5(arr, 10)
// console.log(arr)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const arr = []
// f6 = (array, limit) => {
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.floor(Math.random() * limit));
//     }
// }
// f6(arr, 500)
// console.log(arr)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку
// const arr = [12, 23, 45, 57, 87, 34, 23]
// f7 = (array) => {
//     return arrNew = new Array(array.reverse())
// }
// let result = f7(arr)
// console.log(result)
