// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         console.log(posts)
//         let div = document.createElement('div')
//         div.classList.add('post')
//         posts.map(item => {
//             div.innerHTML += `
//         <div class="itemPost">
//             <h3>id - ${item.id}; ${item.title}</h3>
//             <p>${item.body}</p>
//         </div>`
//         })
//         document.body.appendChild(div)
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response=> response.json())
// .then(comments =>{
//     console.log(comments)
//     let div = document.createElement('div')
//     div.classList.add('comments')
//     comments.map(item=>{
//         div.innerHTML +=`
//         <div class="commentsItem">
//         <h3>id - ${item.id}; name - ${item.name}</h3>
//         <h4>email - ${item.email}</h4>
//         <p>${item.body}</p>
// </div>
//         `
//     })
//     document.body.appendChild(div)
// })