// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let wrap = document.querySelector('.wrap')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log(posts)

        posts.map(item => {
            let div = document.createElement('div')
            div.classList.add('postsItem')
            let h3 = document.createElement('h3')
            h3.innerHTML = `userId - ${item.userId};<br> id post - ${item.id};<br> post title:  ${item.title}`
            div.appendChild(h3)
            let body = document.createElement('p')
            body.innerText = `${item.body}`
            let btn = document.createElement('button')
            btn.innerText = 'show comments'
            let commentWrap = document.createElement('div')
            commentWrap.classList.add('d-none')
            btn.onclick = () => {

                if (commentWrap.classList.contains('commentWrap')){
                    commentWrap.classList.remove('commentWrap')
                    commentWrap.classList.add('d-none')
                }else {
                    commentWrap.classList.add('commentWrap')
                    commentWrap.classList.remove('d-none')
                }
                if(btn.innerText === 'hide comments'){
                    btn.innerText = 'show comments'
                    btn.style.color = 'black'
                    btn.style.background = '#e1dfdf'
                    div.style.background='white'


                }else {
                    btn.innerText = 'hide comments'
                    btn.style.color = 'white'
                    btn.style.background = '#72979b'
                    div.style.background='#acd3d6'


                }
                commentWrap.innerText = ''
                fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                    .then((response) => response.json())
                    .then((json) => {
                        json.map(comment => {
                            let commentItem = document.createElement('div')
                            commentItem.classList.add('commentsItem')
                            commentItem.innerHTML = `
                        <h4>comment id - ${comment.id};<br> comment title - ${comment.name};<br> email - ${comment.email}</h4>
                        <p>${comment.body}</p>
                        <hr>
                        `
                            commentWrap.appendChild(commentItem)
                        })
                    });


            }

            div.appendChild(body)
            div.appendChild(btn)
            div.appendChild(commentWrap)
            wrap.appendChild(div)


        })

    })
