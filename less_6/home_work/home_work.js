// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const f1 = (str1, str2, str3) => console.log(str1.length, str2.length, str3.length)
// f1('hello world', 'lorem ipsum', 'javascript is cool')


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const f2 = (str1, str2, str3) => console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase())
// f2('hello world', 'lorem ipsum', 'javascript is cool')


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// const f3 = (str1, str2, str3) => console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase())
// f3('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL')


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log( str.trim())

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// const stringToarray = (str) => console.log(str.split(' '))
// stringToarray(str)
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// const delete_characters = (string, length) => console.log(string.slice(0, length))
// delete_characters(str, 7)

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// const insert_dash = (string) => console.log(string.split(' ').join('-').toUpperCase())
// insert_dash(str)


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'каждый охотник желает знать';
// const f8 = (string) => string[0].toUpperCase() + string.slice(1)
// console.log(f8(str))
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'каждый охотник желает знать';
// const capitalize = (string) => {
//     return string.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
//
// }
// console.log(capitalize(str))