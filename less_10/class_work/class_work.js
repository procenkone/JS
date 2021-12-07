// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let block = document.createElement('div')
// block.innerHTML=`
// <form action="" name="form1">
//     <input type="text" name="inp1">
//     <input type="text" name="inp2">
// </form>
// <form action="" name="form2">
//     <input type="text" name="inp1F2">
//     <input type="text" name="inp2F2">
// </form>
// <button>push me</button>
// `
// document.body.append(block)
// let inp1 = document.forms.form1.inp1
// let inp2 = document.forms.form1.inp2
// let inp1F2 = document.forms.form2.inp1F2
// let inp2F2 = document.forms.form2.inp2F2
// const button = document.getElementsByTagName('button')
// button[0].onclick=()=>{
//     console.log(inp1.value, inp2.value, inp1F2.value, inp2F2.value)
//
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// let button = document.createElement('button')
// input1.type = 'number'
// input2.type = 'number'
// button.innerText = 'push me'
// document.body.append(input1, input2, input3, button)
// button.onclick = () => createTable(input1.value, input2.value, input3.value)
//
// function createTable(tr, td, text) {
//     let table = document.createElement('table')
//     table.style.border = '1px solid black'
//     for (let i = 0; i < tr; i++) {
//     let tr = document.createElement('tr')
//         tr.style.border = '1px solid black'
//         for (let i = 0; i < td; i++) {
//             let td = document.createElement('td')
//             td.style.border = '1px solid black'
//             td.innerText = text
//             tr.append(td)
//         }
//         table.append(tr)
//     }
//     document.body.append(table)
// }




// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let input = document.createElement('input')
// let button = document.createElement('button')
// button.innerText = 'push me'
// document.body.append(input,button)
// let arr = ['qqq', 'aaa', 'zzz','www','sss','xxx']
// let text = document.getElementsByTagName('input')
// button.onclick=()=>{
//     for (const item of arr) {
//         if(item === text[0].value){
//             alert('alarm!!!')
//         }
//     }
//     text[0].value = ''
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let input = document.createElement('input')
// input.classList.add('input')
// let button = document.createElement('button')
// button.innerText = 'push me'
// document.body.append(input, button)
// let arr = ['qqq', 'aaa', 'zzz', 'www', 'sss', 'xxx']
// let text = document.querySelector('.input')
// button.onclick = () => {
//     let temp = text.value.split(' ')
//     for (const item of arr) {
//         for (const itemTemp of temp) {
//             if (item === itemTemp) {
//                 alert('alarm!!!')
//             }
//         }
//     }
//     text.value = ''
// }

