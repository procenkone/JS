// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.addEventListener('click',(event)=>{
//     console.log('назва тегу - ' + event.target.tagName+',','список класів - '+ event.target.classList+',','список id - '+event.target.id+',', 'ширина і висота - '+ event.target.style.width+'*'+event.target.style.height )
// })


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let block = document.createElement('div')
// document.addEventListener('click', (event)=>{
//     block.classList.add('block')
//     block.innerHTML = `
//     <p class="exit">X</p>
//     <h3>назва тегу - ${event.target.tagName}</h3>
//     <p>список класів - ${event.target.classList}</p>
//     <p>список id - ${event.target.id}</p>
//     <p>ширина і висота - ${event.target.style.width} * ${event.target.style.height}</p>
//     `
//     document.body.append(block)
//     let exit = document.querySelector('.exit').onclick = function (){
//         console.log('sd')
//         block.classList.add('hide')
//         location.reload()
//     }
// })


//
// -- взять массив пользователей
//
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// let block = document.createElement('div')
// let result = document.createElement('div')
// block.innerHTML = `
//   <div>
//     <input type="checkbox" id="status" >
//     <label for="status">status</label>
//   </div>
//
//   <div>
//     <input type="checkbox" id="age" >
//     <label for="age">age>29</label>
//   </div>
//   <div>
//     <input type="checkbox" id="city" >
//     <label for="city">city Kiev</label>
//   </div>
// `
// document.body.append(block, result)
// let check1 = document.getElementById('status')
// let check2 = document.getElementById('age')
// let check3 = document.getElementById('city')
// onclick = () => {
//     users = usersWithAddress.filter(item => {
//         return item.status === false && check1.checked ||
//             item.age >= 29 && check2.checked ||
//             item.address.city === 'Kyiv' && check3.checked
//     })
//     result.innerText=''
//     for (const user of users) {
//         result.innerHTML += `
//         <h3>${user.name}-${user.age}-${user.status}-${user.name}-${user.address.city}</h3>
//         `
//     }
//
// }



//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
// let button1 = document.createElement('button');
// let button2 = document.createElement('button');
// button1.innerText = 'назад';
// button2.innerText = 'вперед';
// document.body.append(button1 , button2)
// let arr = []
// function rec(fatherDiv) {
//     for (let i = 0; i < fatherDiv.children.length; i++) {
//         arr.push(`${fatherDiv.children[i].nodeName}`)
//         if (fatherDiv.children[i].children.length) {
//             rec(fatherDiv.children[i])
//         }
//     }
// }
//
// let i = 0;
//
// button1.onclick = () => {
//     if (i > 0){
//         console.log(arr[i]);
//         i--
//     } else i = arr.length;
// }
//
// button2.onclick = () => {
//     if (i< arr.length){
//         console.log(arr[i]);
//         i++
//     } else i = 0;
// }
//
// rec(document.body)


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let children = document.querySelector('.children')// бальківський слайдера
// let widhtSlider = 0//початкове положення слайдера
// let next = document.querySelector('.next')//кнопка право
// let prew = document.querySelector('.prew')// кнопка ліво
// next.addEventListener('click', () => {
//     widhtSlider = widhtSlider + 128
//     if (widhtSlider > 640) {
//         widhtSlider = 0
//     }
//     children.style.left = -widhtSlider + 'px'
// })// функція прокрутки вправо
// prew.addEventListener('click', () => {
//     widhtSlider = widhtSlider - 128
//     if (widhtSlider < 0) {
//         widhtSlider = 640
//     }
//     children.style.left = -widhtSlider + 'px'
// })// функція прокрутки вліво


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let p = document.getElementsByClassName('p')[0]
// onmouseup= () => {
//     selection = window.getSelection().toString();
//     let str = selection.bold().italics()
//     p.innerHTML = p.innerText.replace(selection,str);
// }