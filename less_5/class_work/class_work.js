// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const f1 = (a, b, c) => {
//     let min = 0
//     if (a < b && a < c) return  min = a
//     if (b < a && b < c) return  min = b
//     if (c < a && c < b) return  min = c
// }
// console.log(f1(20, 10, 15))


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const f2 = (a, b, c) => {
//     let max = 0
//     if (a > b && a > c) return  max = a
//     if (b > a && b > c) return  max = b
//     if (c > a && c > b) return  max = c
// }
// console.log(f2(30, 40, 15))


// - створити функцію яка повертає найбільше число з масиву
// const array = [10,2,3,4,5]
// const f3=(arr)=>{
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
// const f4 = (arr) => {
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
// const f5=(arr)=>{
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
// const f6=(arr)=>{
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         sum = sum + arrElement
//     }
//     return sum/arr.length
// }
// console.log(f6(array))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const f7 = (...rest) => {
//     let min = rest[0]
//     let max = rest[0]
//     for (let i = 0; i < rest.length; i++) {
//         const restElement = rest[i];
//         if (min > restElement && min !==0) min = restElement
//         if(max<restElement) max = restElement
//     }
//     console.log('найбільше число -' ,max )
//     return min
// }
// console.log('return найменше -', f7(1, 2, 3, 5))


// - створити функцію яка заповнює масив рандомними числами
// let array = []
// const f8=(arr)=>{
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