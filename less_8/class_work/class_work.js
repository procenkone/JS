// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// document.getElementById('main_header').classList.add('oct-2021')
// b) робить шириниу елементу ul 400px
// let tagUl = document.getElementsByTagName('ul');
// for (let ulElement of tagUl) {
//     ulElement.style.width = '400px';
// }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (let linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName('listElement2');
// for (let listElement2Element of listElement2) {
//     console.log(listElement2Element.innerText);
// }
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let tagLi = document.getElementsByTagName('li');
// for (let liElement of tagLi) {
//     liElement.style.background = 'blue';
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let tagA = document.getElementsByTagName('a');
// for (let tagAElement of tagA) {
//     tagAElement.classList.add('anchor');
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (let tagAElement of tagA) {
//     if (tagAElement.innerText === 'link3') tagAElement.style.fontSize = '40px';
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (let tagAElement of tagA) {
//     tagAElement.classList.add('element_' + tagAElement.innerText);
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let color = prompt();
// let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.background = color;
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let colorText = prompt();
// let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     if(subHeaderElement.innerText === 'content 2 segment'){
//         subHeaderElement.style.color = colorText;
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let contentText = prompt();
// let content1 = document.getElementsByClassName('content_1');
// for (const content1Element of content1) {
//     content1Element.innerText = contentText;
// }
// l) отримати елементи p та змінити їм padding на 20px
// let tagP = document.getElementsByTagName('p');
// for (const tagPElement of tagP) {
//     tagPElement.style.padding = '20px';
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
//     text2Element.innerText = 'sep-2021';
// }