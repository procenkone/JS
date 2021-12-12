// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let usersWrap = document.querySelector('.usersWrap')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.map(itemUser => {
            let userItem = document.createElement('div')
            userItem.classList.add('userItem')
            let infoBlockUser = document.createElement('div')
            infoBlockUser.classList.add('infoBlockUser')
            let h3 = document.createElement('h3')
            h3.innerHTML = `name - ${itemUser.name};<br> username - ${itemUser.username};<br> phone:  ${itemUser.phone};<br> website - ${itemUser.website};<br> email - ${itemUser.website}`
            // userItem.appendChild(h3)
            let btnPost = document.createElement('button')
            btnPost.innerText = 'show to post'
            infoBlockUser.appendChild(h3)
            infoBlockUser.appendChild(btnPost)
            userItem.appendChild(infoBlockUser)
            usersWrap.appendChild(userItem)
            btnPost.onclick = () => {
                let wrapPost = document.createElement('div')
                wrapPost.classList.add('d-none')
                if (wrapPost.classList.contains('wrapPost')) {
                    wrapPost.classList.remove('wrapPost')
                    wrapPost.classList.add('d-none')
                } else {
                    wrapPost.classList.add('wrapPost')
                    wrapPost.classList.remove('d-none')
                }
                wrapPost.innerText = ''
                fetch(`https://jsonplaceholder.typicode.com/users/${itemUser.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        posts.map(item => {
                            let itemPost = document.createElement('div')
                            itemPost.classList.add('itemPost')
                            let h3 = document.createElement('h3')
                            h3.innerHTML = `userId - ${item.userId};<br> id post - ${item.id};<br> post title:  ${item.title}`
                            itemPost.appendChild(h3)
                            let body = document.createElement('p')
                            itemPost.appendChild(body)
                            body.innerText = `${item.body}`
                            let btnComments = document.createElement('button')
                            itemPost.appendChild(btnComments)
                            btnComments.innerText = 'show comments'
                            let commentWrap = document.createElement('div')
                            commentWrap.classList.add('commentWrap')
                            // commentWrap.classList.add('d-none')
                            btnComments.onclick = () => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                                    .then(response => response.json())
                                    .then(comment => {
                                        comment.map(comment => {
                                            let commentItem = document.createElement('div')
                                            commentItem.classList.add('commentsItem')
                                            commentItem.innerHTML = `
                        <h4>comment id - ${comment.id};<br> comment title - ${comment.name};<br> email - ${comment.email}</h4>
                        <p>${comment.body}</p>
                        <hr>
                        `
                                            commentWrap.appendChild(commentItem)
                                        })
                                    })
                            }

                            itemPost.appendChild(btnComments)
                            itemPost.appendChild(commentWrap)
                            wrapPost.appendChild(itemPost)
                            userItem.appendChild(wrapPost)

                        })
                    })
            }

        })
    })


