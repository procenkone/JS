// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = Math.floor(Math.random() * 59)
// if (time <= 14) {
//     console.log( time, 'перша четверть')
// }else if (time > 15 && time <= 29 ){
//     console.log( time, 'друга четверть')
// }else if (time > 30 && time <= 44){
//     console.log(time, 'третя четверть')
// }else console.log(time, 'черверта четверть')


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = Math.floor(Math.random() * 31)
// if(day<=9){
//     console.log( day, 'перша декада')
// }else if(day>=10 && day<=19){
//     console.log( day, 'друга декада')
// }else console.log( day, 'третя декада')


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test;
// test = '' ? console.log('Неправильно') :console.log('Вірно')
// test = 1 ? console.log('Неправильно') :console.log('Вірно')


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = Math.floor(Math.random() * (1 - -3 + 1)) + -3// генерує число від -3 до 1
// a !== 0 ? console.log(a, 'Вірно') : console.log(a, 'Невірно')


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let dayNum = +prompt('введіть день тижня')
// switch (dayNum){
//     case 1:
//         console.log('work')
//         break;
//     case 2:
//         console.log('shop')
//         break;
//     case 3:
//         console.log('home work')
//         break;
//     case 4:
//         console.log('clear car')
//         break;
//     case 5:
//         console.log('fishing')
//         break;
//     case 6:
//         console.log('go to forest')
//         break;
//     case 7:
//         console.log('bla bla')
//         break;
//     default:
//         console.log('невірно введені данні')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = prompt('введіть рік для перевірки на високосність')
// year % 4 === 0 ? console.log('цей рік високосний') : console.log('цей рік не високосний')


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let titleJS = prompt('Яка «офіційна» назва JavaScript?')
// if(titleJS === 'ECMAScript'){
//     console.log('Правильно!')
// }else console.log('Не знаєте? ECMAScript!')


