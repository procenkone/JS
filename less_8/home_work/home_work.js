// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// console.log(document.getElementById('content').innerText);

// -- отримує текст з блоку з id "rules"
// console.log(document.getElementById('rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById('content').innerText = 'qwerty';

// -- замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById('rules').innerText = 'text';

// -- змініть кожному елементу колір фону на червоний
// document.getElementById('content').style.background = 'red';
// document.getElementById('rules').style.background = 'red';

// -- змініть кожному елементу колір тексту на синій
// document.getElementById('content').style.color = 'blue';
// document.getElementById('rules').style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let li =document.getElementsByClassName('fc_rules');
// for (let liElement of li) {
//     liElement.style.color = 'red'
// }