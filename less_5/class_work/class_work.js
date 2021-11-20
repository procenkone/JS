// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// f1 = (a, b, c) => {
//     let min = 0
//     if (a < b && a < c) return  min = a
//     if (b < a && b < c) return  min = b
//     if (c < a && c < b) return  min = c
// }
// console.log(f1(20, 10, 15))


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// f2 = (a, b, c) => {
//     let max = 0
//     if (a > b && a > c) return  max = a
//     if (b > a && b > c) return  max = b
//     if (c > a && c > b) return  max = c
// }
// console.log(f2(30, 40, 15))


// - створити функцію яка повертає найбільше число з масиву
// const array = [10,2,3,4,5]
// f3=(arr)=>{
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         if(max<arrElement) max = arrElement
//     }
//     console.log(max)
// }
// f3(array)


// - створити функцію яка повертає найменьше число з масиву
// const array = [10, 2, 3, 4, 5,1]
// f4 = (arr) => {
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         if (min > arrElement) min = arrElement
//     }
//     console.log(min)
// }
// f4(array)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const array = [10, 2, 3, 4, 5,1]
// f5=(arr)=>{
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         sum = sum + arrElement
//     }
//     return sum
// }
// f5(array)
// console.log(f5(array))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const array = [10, 2, 3, 4, 5,1]
// f6=(arr)=>{
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         sum = sum + arrElement
//     }
//     return sum/arr.length
// }
// console.log(f6(array))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function f7() {
//     let argumentsAll = arguments
//     let min;
//     let max;
//     let argFn = (arg) => {
//          min = arg[0]
//          max = arg[0]
//         for (let i = 0; i < arg.length; i++) {
//             if (min > arg[i]) min = arg[i]
//             if (max < arg[i]) max = arg[i]
//         }
//     }
//     argFn(argumentsAll)
//     console.log(max)
//     return min
// }
// let result = f7(1, 3, 4)
// console.log(result)



// - створити функцію яка заповнює масив рандомними числами
// let array = []
// f8=(arr)=>{
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random()*100))
//     }
// }
// f8(array)
// console.log(array)



// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const array = []
// f9=(arr, limit)=>{
//     for (let i = 0; i < 15; i++) {
//         arr.push(Math.floor(Math.random()*limit))
//     }
// }
// f9(array, 75)
// console.log(array)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const array = [1,2,3,4,5,6,7,8,9,10]
// const arrayRevers = []
// f10=(arr)=>{
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         arrayRevers.push(arrElement)
//     }
// }
// f10(array)
// console.log(arrayRevers)