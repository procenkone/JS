// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let hello = 'hello'
// let owu = 'owu'
// let com = 'com'
// let ua = 'ua'
// let one = 1
// let ten = 10
// let num = -999
// let oneTwoThree = 123
// let pi = 3.14
// let twoSeven = 2.7
// let sixteen = 16
// let boolTrue = true
// let boolFalse = false
// console.log(hello, owu, com, ua, one, ten, num, oneTwoThree, pi, twoSeven, sixteen, boolTrue, boolFalse)
// alert(`${hello}, ${owu}, ${com}, ${ua}, ${one}, ${ten}, ${num}, ${oneTwoThree}, ${pi}, ${twoSeven}, ${sixteen}, ${boolTrue}, ${boolFalse}`)
// document.write(`${hello}, ${owu}, ${com}, ${ua}, ${one}, ${ten}, ${num}, ${oneTwoThree}, ${pi}, ${twoSeven}, ${sixteen}, ${boolTrue}, ${boolFalse}`)


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//  hello = 'owu'
//  owu = 'com'
//  com = 'ua'
//  ua = 'one'
//  one = 'ten'
//  ten = 'num'
//  num = 'oneTwoThree'
//  oneTwoThree = 'pi'
//  pi = 'twoSeven'
//  twoSeven = 'sixteen'
//  sixteen = 'boolTrue'
//  boolTrue = 'boolFalse'
//  boolFalse = true
// console.log(hello, owu, com, ua, one, ten, num, oneTwoThree, pi, twoSeven, sixteen, boolTrue, boolFalse)
// alert(`${hello}, ${owu}, ${com}, ${ua}, ${one}, ${ten}, ${num}, ${oneTwoThree}, ${pi}, ${twoSeven}, ${sixteen}, ${boolTrue}, ${boolFalse}`)
// document.write(`${hello}, ${owu}, ${com}, ${ua}, ${one}, ${ten}, ${num}, ${oneTwoThree}, ${pi}, ${twoSeven}, ${sixteen}, ${boolTrue}, ${boolFalse}`)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// const firstName = 'Procenko'
// const middleName = 'Oleksandr'
// const lastName = 'Oleksandrovuch'
// const person = `${firstName} ${middleName} ${lastName}`
// console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt('you name');
// let surname = prompt('you surname');
// let age = prompt('how old are you');
// alert(`Вітаю ${name} ${surname}. Тобі ${age} років`)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a,typeof b,typeof c)


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>"); // у випадку додавання буде конкатинація а у інших випадках буде математика оскільки JS баде намагатись перетворити стоку в number
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");
