// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let block = document.createElement('div')
// block.innerText = 'text'
// block.classList.add('wrap')
// block.style.background = 'coral'
// block.style.color = 'white'
// block.style.fontSize = '40px'
// block.style.margin = '8px'
// block.style.height = '100px'
// document.body.appendChild(block)
//
// let cloneBlock = block.cloneNode(true)
// document.body.appendChild(cloneBlock)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let menu = document.querySelector('.menu')
// const arr = ['Main', 'Products', 'About us', 'Contacts']
// arr.map(item => {
//     menu.innerHTML += `<li>${item}</li>`
// })


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let block = document.createElement('div')
//     block.innerHTML = `<p>${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}</p>`
//     document.body.appendChild(block)
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let block = document.createElement('div')
//     block.classList.add('item')
//     let title = document.createElement('h1')
//     title.classList.add('heading')
//     title.innerText = coursesAndDurationArrayElement.title
//     let monthDuration = document.createElement('p')
//     monthDuration.classList.add('description')
//     monthDuration.innerText = coursesAndDurationArrayElement.monthDuration
//     block.appendChild(title)
//     block.appendChild(monthDuration)
//     document.body.appendChild(block)
// }
