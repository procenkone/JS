// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// const arr = [1,2,3,4,5,'a','b','c','d','e', 11,12,'aa',true, false]
// console.log(arr)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const array = []
// for (let i = 0; i < 10; i++) {
//     array.push(`'index'-${i}`)
// }
// console.log(array)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 1; i <= 10; i++) {
//     document.write('<div>довільний текст</div>')
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>довільний текст - ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// while (i<=20){
//     document.write('<h1>довільний текст</h1>')
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while (i<=20){
//     document.write(`<h1>довільний текст - ${i}</h1>`)
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const arr = []
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// console.log(arr)
// }



// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const arr = []
// for (let i = 1; i <= 10 ; i++) {
//     arr.push('str')
//     console.log(arr)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі
// const arr = []
// for (let i = 0; i < 1 ; i++) {
//     for (let j = 0; j < 3 ; j++) {
//         arr.push(Math.floor(Math.random()*10))
//     }
//     for (let b = 0; b < 3; b++) {
//         arr.push('str')
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.push(true)
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.push(false)
//     }
//     console.log(arr)
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const arr = []
// for (let i = 0; i < 1 ; i++) {
//     for (let j = 0; j < 3 ; j++) {
//         arr.push(Math.floor(Math.random()*10))
//     }
//     for (let b = 0; b < 3; b++) {
//         arr.push('str')
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.push(true)
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.unshift(false)
//     }
//     for (const arrElement of arr) {
//         if (typeof arrElement === 'boolean'){
//             console.log(arrElement)
//         }
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// const arr = []
// for (let i = 0; i < 1 ; i++) {
//     for (let j = 0; j < 3 ; j++) {
//         arr.push(Math.floor(Math.random()*10))
//     }
//     for (let b = 0; b < 3; b++) {
//         arr.push('str')
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.push(true)
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.unshift(false)
//     }
//     for (const arrElement of arr) {
//         if (typeof arrElement === 'number'){
//             console.log(arrElement)
//         }
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// const arr = []
// for (let i = 0; i < 1 ; i++) {
//     for (let j = 0; j < 3 ; j++) {
//         arr.push(Math.floor(Math.random()*10))
//     }
//     for (let b = 0; b < 3; b++) {
//         arr.push('str')
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.push(true)
//     }
//     for (let a = 0; a <2 ; a++) {
//         arr.unshift(false)
//     }
//     for (const arrElement of arr) {
//         if (typeof arrElement === 'string'){
//             console.log(arrElement)
//         }
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const arr = []
// for (let i = 1; i <= 1 ; i++) {
//     arr[0] = 1
//     arr[1] = 2
//     arr[2] = 3
//     arr[3] = 'asd'
//     arr[4] = 'asd'
//     arr[5] = 'asd'
//     arr[6] = 'asd'
//     arr[7] = true
//     arr[8] = false
//     arr[9] = {}
//     console.log(arr)
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) {
//     console.log(`поточний номер кроку - ${i}`)
//     document.write(`<div>поточний номер кроку - ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log(`поточний номер кроку - ${i}`)
//     document.write(`<div>поточний номер кроку - ${i}</div>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i+=2) {
//     console.log(`поточний номер кроку - ${i}`)
//     document.write(`<div>поточний номер кроку - ${i}</div>`)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if(i  %2 === 0){
//         console.log(`поточний номер кроку - ${i}`)
//         document.write(`<div>поточний номер кроку - ${i}</div>`)
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if(i  %2 !== 0){
//         console.log(`поточний номер кроку - ${i}`)
//         document.write(`<div>поточний номер кроку - ${i}</div>`)
//     }
// }