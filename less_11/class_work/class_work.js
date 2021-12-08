// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const wrap = document.querySelector('.wrap')
const favUsers = JSON.parse(localStorage.getItem('favUsers')) || []
users.map(item => {
    let div = document.createElement('div')
    div.classList.add('div')
    let h3 = document.createElement('h3')
    h3.innerText = `name - ${item.name}, age - ${item.age}, status - ${item.status}`
    div.appendChild(h3)
    wrap.appendChild(div)
    let btn = document.createElement('button')
    btn.innerText = 'add to favorites'
    btn.onclick=()=>{
        favUsers.push(item)
        localStorage.setItem('favUsers', JSON.stringify(favUsers))
        console.log(favUsers)
    }
    div.appendChild(btn)
})
