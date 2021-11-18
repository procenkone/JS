// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// f1 = (a, b) => a * b
// let result = f1(15, 15)
// console.log(result)


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// f2=(r)=>3.14 * Math.pow(r,2)
// let result = f2(4)
// console.log(result)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// f3 = (h, r) => (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2))
// let result = f3(10, 3)
// console.log(result)


// - створити функцію яка приймає масив та виводить кожен його елемент
// const arr = [1, 2, 3, 4, 5]
// const arr2 = [11, 22, 33, 44, 55]
// f4 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// f4(arr)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// f5 = (text) => document.write(`<p>${text}</p>`)
// f5('okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// f6 = (text) => {
//     document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
// `)
// }
// f6('okten')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// f6=(text,num)=>{
//     document.write('<ul>')
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// f6('okten',6)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 2, 3, 'a', 'b', 'c', true, false]
// f7=(array)=>{
//     document.write('<ul>')
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write('</ul>')
// }
// f7(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const arr = [
//     {
//         id:1,
//         name:'alex',
//         age:32
//     },
//     {
//         id:2,
//         name:'alexey',
//         age:18
//     },
//     {
//         id:3,
//         name:'lex',
//         age:32
//     },
// ]
// f8=(array)=>{
//     document.write('<div>')
//     for (const arrayElement of array) {
//         document.write('<ul>')
//         document.write(`<li> id- ${arrayElement.id}; name - ${arrayElement.name}; age - ${arrayElement.age}</li>`)
//         document.write('</ul>')
//     }
//     document.write('</div>')
// }
// f8(arr)