let arr = []
let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    }, {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    }, {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    }, {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    }, {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    }, {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    }, {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    }, {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    }, {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    }, {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    }, {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// for (const user of users) {
//     arr.push(user.address)
// }
// console.log(arr)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let block = document.createElement('div')
//     block.innerHTML += `
//     <h1>name: ${user.name}, age: ${user.age}, status: ${user.status}</h1>
//     `
//     for (const userKey in user.address) {
//         block.innerHTML += `
//
//         ${userKey} - ${user.address[userKey]}<br>
//         `
//     }
//     document.body.appendChild(block)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// document.body.style.display = 'flex'
// document.body.style.justifyContent = 'center'
// document.body.style.gap = '20px'
// for (const user of users) {
//     let block = document.createElement('div')
//     let address = document.createElement('div')
//     block.style.border = '1px solid black'
//     block.style.padding = '5px'
//     block.innerHTML += `
//      <div>name: ${user.name}</div>
//      <div>age: ${user.age}</div>
//      <div>status: ${user.status}</div>
//     `
//     for (const userKey in user.address) {
//         address.innerHTML += `
//         ${userKey} - ${user.address[userKey]}<br>
//         `
//
//     }
//     block.appendChild(address)
//     document.body.appendChild(block)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// document.body.style.display = 'flex'
// document.body.style.justifyContent = 'center'
// document.body.style.gap = '20px'
// for (const user of users) {
//     let block = document.createElement('div')
//     let address = document.createElement('div')
//     address.classList.add('address')
//     block.style.border = '1px solid black'
//     block.style.padding = '5px'
//     block.innerHTML += `
//      <div>name: ${user.name}</div>
//      <div>age: ${user.age}</div>
//      <div>status: ${user.status}</div>
//     `
//     for (const userKey in user.address) {
//         address.innerHTML += `
//        <div> ${userKey} - ${user.address[userKey]}</div>
//         `
//     }
//     block.appendChild(address)
//     document.body.appendChild(block)
// }



// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let content = document.getElementById('content')
// let ul = document.createElement('ul')
//
// let array = []
// const f1=(startElement)=>{
//     if(startElement.children.length){
//         for (const element of startElement.children) {
//             if(element.tagName === 'H2'){
//                 array.push(element.innerHTML)
//             }
//             f1(element)
//         }
//     }
// }
// f1(document.body)
// array.map(item=>{
//     ul.innerHTML += `
//     <li>${item}</li>
//     `
//     content.appendChild(ul)
// })


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// let count = 1
// for (const rule of rules) {
//     let block = document.createElement('div')
//     block.classList.add('rules')
//     block.classList.add(`rule${count}`)
//     count++
//     block.innerHTML+=`
//     <h2>${rule.title}</h2>
//     <p>${rule.body}</p>
//     `
//     document.body.appendChild(block)
// }