// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// const mail = 'someeMAIL@i.wa'
// const f1 = (text) => {
//         if(text.includes('@', 2)){//перевірка на наявність равлика після другого елементу
//             let indexOf = text.indexOf('@')//записали індекс равлика для подальшої перевірки чи є крапка після равлика
//                 if(text.includes('.',indexOf+3)){//первірка чи є крапка після равлика
//                     let indexDot = text.indexOf('.',indexOf+3 )//записали індекс крапки для подальшої перевірки на наявність символів після крапки
//                     if (text[indexDot + 2]){//перевіка чи є символи після крапки
//                         return 'valid'
//                     }else  return 'not valid'
//                 } else return 'not valid'
//         }return 'valid'
// }
// console.log(f1(mail))


// Примітка
// Для тих, хто дуже розумний та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// - є масив
// let   coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']

//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// const sortCourses = coursesArray.sort((a, b) => b.modules.length - a.modules.length)
// console.log(sortCourses)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let str = "Астрономия это наука о небесных объектах";
// let symb = "о"
// const count=(text, stringsearch)=>{
//     console.log(text.split(stringsearch).length-1)
// }
// count(str,symb)
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// const cutString = (str, n) => {
// let str2 = str.split(' ')
//     return str2.slice(0,n)
// }
// console.log( cutString(str, 5))