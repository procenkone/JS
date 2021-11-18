// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// let concat = ''
// function f1(arg1) {
//     if (arguments.length === 1) {
//         console.log(arg1)
//     } else {
//         for (let i = 0; i < arguments.length; i++) {
//          concat += arguments[i]
//         }
//     }
//     return concat
// }
// let result = f1(4,4, 'jk')
// console.log(result)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// const arr1 = [1, 2, 3, 4]
// const arr2 = [2, 3, 4, 5]
// let arr3 = []
// f2 = (array1, array2) => {
//     for (let i = 0; i < array1.length; i++) {
//         arr3.push(array1[i] + array2[i])
//     }
// }
// f2(arr1, arr2)
// console.log(arr3)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// let arr2 =[]
// f3=(array)=>{
//     for (let arrayElement of array) {
//         for (let arrayElementKey in arrayElement) {
//             arr2.push(arrayElementKey)
//         }
//     }
// }
// f3(arr)
// console.log(arr2)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// let arr2 =[]
// f4=(array)=>{
//     for (let arrayElement of array) {
//         for (let arrayElementKey in arrayElement) {
//             arr2.push(arrayElement[arrayElementKey])
//         }
//     }
// }
// f4(arr)
// console.log(arr2)