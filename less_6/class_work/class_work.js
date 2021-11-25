// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// const f1 = (str) => {
//     return str.replaceAll('.', ' ')
//         .replaceAll('-', ' ')
//         .replaceAll('_', ' ')
//         .replace(' ', '')
// }
// console.log(f1(n1))


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr = []
const f2 = () => {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
}
f2()
console.log(arr)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// arr.sort((a, b) => a - b)
// console.log(arr)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// const arrFilter = arr.filter(item => item % 2 === 0)
// console.log(arrFilter)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// const f3 = (array) => array.map(item => item + '')
// console.log(f3(arr))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11, 21, 3];
// const f4 = (arg) => {
//     if (arg === 'ascending') nums.sort((a, b) => a - b)
//     if (arg === 'descending') nums.sort((a, b) => b - a)
// }
// f4('descending')
// console.log(nums)

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// const sortMonth = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
// console.log(sortMonth)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const monthDuration = coursesAndDurationArray.filter(item => item.monthDuration > 5)
// console.log(monthDuration)


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString=(str, n)=>{
// let split = str.split('')
//     for (let i = n; i < split.length; i+=n) {
//         split[i - 1] += ','
//     }
//     return console.log(split.join('').split(' '))
//
// }
// cutString('наслаждение',3)

