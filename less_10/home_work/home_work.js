// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div')
// div.id='text'
// div.innerText='lorem lorem lorem'
// document.body.appendChild(div)
// div.onclick = ()=> div.classList.toggle("show-hide");

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button')
// button.innerText = 'push me'
// button.onclick = () => button.classList.toggle('show-hide')
// document.body.appendChild(button)

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let inputAge = document.createElement('input')
// inputAge.placeholder = 'enter your age'
// let button = document.createElement('button')
// button.innerText = 'push'
// let p = document.createElement('p')
// document.body.appendChild(inputAge)
// document.body.appendChild(button)
// document.body.appendChild(p)
//
// button.onclick = () => {
//     let age = inputAge.value
//     if (age < 18) {
//         p.innerText = 'sorry but you very young'
//     } else {
//         p.innerText = 'my congratulation, you adult'
//     }
//     console.log(age)
// }
// - Создайте меню, которое раскрывается/сворачивается при клике
// let block = document.createElement('div')
// let title = document.createElement('h2')
// title.innerText = 'menu hide/show'
// let ul = document.createElement("ul")
// for (let i = 0; i < 5; i++) {
// let li = document.createElement('li')
// li.innerText = 'number -'+i
// ul.appendChild(li)
// }
// title.onclick = () => ul.classList.toggle('show-hide')
// block.append(title,ul)
// document.body.appendChild(block)
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body
// const comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
// let block = document.createElement('div')
// document.body.appendChild(block)
// comments.map((item,index)=>{
//     block.innerHTML +=`
//     <div><h1>${item.title}-${index+1}</h1><p>${item.body}</p> <button>show/hide</button></div>
//     `
// })
// let buttons = document.getElementsByTagName('button')
// for (const button of buttons) {
//     button.onclick= function(e){
//         e.target.previousElementSibling.classList.toggle('show-hide')
//     }
// }
