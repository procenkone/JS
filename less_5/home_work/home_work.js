// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// f1=(h,r)=>h*r
// console.log(f1(10,5))


// - створити функцію яка обчислює та повертає площу кола
// f2=(r)=>Math.PI * Math.pow(r,2)
// console.log(f2(7))


// - створити функцію яка обчислює та повертає площу циліндру
// f3=(h,r)=>(2*Math.PI*r*h)+(2*Math.PI * Math.pow(r,2))
//     console.log(f3(7,4))


// - створити функцію яка приймає масив та виводить кожен його елемент
// const array = [1,12,3,5,4,76,45,3]
// f4=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         console.log(arrElement)
//     }
// }
// f4(array)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// f5=(text)=>{
//     document.write(`<p>${text}</p>`)
// }
// f5('hello mentor')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// f6=(text)=>{
//     document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
//     `)
// }
// f6('hello okten')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// f7=(text, num)=>{
//     document.write('<ul>')
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// f7('hello okten', 7)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const array = [1,2,3,true,false,'str1','str2']
// f7=(arr)=>{
//         document.write('<ul>')
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         document.write(`<li>${arrElement}</li>`)
//     }
//         document.write('</ul>')
// }
// f7(array)
//


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const array = [
//     {
//         id:1,
//         name:'alex',
//         age:32
//     },
//     {
//         id:2,
//         name:'new alex',
//         age:32
//     },
//     {
//         id:3,
//         name:'old alex',
//         age:32
//     }
// ]
// f8=(arr)=>{
//     for (let arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age} </div>`)
//     }
// }
// f8(array)