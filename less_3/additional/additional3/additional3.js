// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arr = []
// for (let i = 1; i <= 100; i++) {
//     if(i %2 === 0 ){
//         arr.push(i)
//     }
// }
// console.log(arr)

/////////////////////////////////////////////////////////

// b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 1; i <= 100; i++) {
//     if(i %2 !== 0 ){
//         arr.push(i)
//     }
// }
// console.log(arr)

///////////////////////////////////////////////////////////


// c. Заповнити масив 20ма рандомними числами.
// for (let i = 1; i <= 20; i++) {
//         arr.push(Math.floor(Math.random()*100))
// }
// console.log(arr)

////////////////////////////////////////////////////////////


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732
// for (let i = 1; i <= 20; i++) {
//     arr.push(Math.floor(Math.random() * (732 - 8 + 1) + 8))
// }
// console.log(arr)

//////////////////////////////////////////////////////////

// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 1; i<=100; i++){
//     arr.push(i)
// }
// for (let i = 2; i<arr.length; i+=3){
//     console.log(arr[i])
// }

//////////////////////////////////////////////////////////////

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 1; i<=100; i++){
//     arr.push(i)
// }
// for (let i = 2; i<arr.length; i+=3){
//     if (arr[i] %2 === 0){
//         console.log(arr[i])
//     }
// }

//////////////////////////////////////////////////////////////////

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr2 = []
// for (let i = 1; i<=100; i++){
//     arr.push(i)
// }
// for (let i = 2; i<arr.length; i+=3){
//     if (arr[i] %2 === 0){
//         arr2.push(arr[i])
//         console.log(arr[i])
//     }
// }
// console.log('новий масив ', arr2)


//////////////////////////////////////////////////////////////////
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// const example = [1, 2, 3, 5, 7, 9, 56, 8, 67]
// for (let i = 0; i < example.length; i++) {
//     if (example[i] % 2 === 0){
//         console.log(example[i - 1])
//     }
// }


//////////////////////////////////////////////////////////////
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let sum = 0
// const arrNum = [100,250,50,168,120,345,188]
// for (let i = 0; i < arrNum.length; i++) {
//     sum = sum + arrNum[i]
// }
// console.log(Math.floor(sum/arrNum.length))


//////////////////////////////////////////////////////////
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = []
// let array2 = []
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random() * 10))
// }
// for (let i = 0; i < array.length; i++) {
//     array2.push(array[i] * 5)
// }
// console.log(array2)

//////////////////////////////////////////////////////////////
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// const arr = [1,5,6,'fdg','ds', true, false]
// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number'){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)


/////////////////////////////////////////////////////////////////
// - Дано 2 масиви з рівною кількістю об'єктів. З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];