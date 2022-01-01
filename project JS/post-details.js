let postId = window.location.toString()
let parts = postId.split('=');
let answer = parts[parts.length - 1];

const postItem = document.getElementsByClassName('postItem')[0]
fetch(`https://jsonplaceholder.typicode.com/posts/${answer}`)
    .then(response=>response.json())
    .then(posts=>{

            postItem.innerHTML = `
            <h2>userId: ${posts.userId}<br>post id: ${posts.id}<br> title: ${posts.title}<br> body: ${posts.body}</h2>
            `
        fetch(`https://jsonplaceholder.typicode.com/posts/${answer}/comments`)
            .then(response=>response.json())
            .then(comments =>{
                let commentsItem = document.createElement('div')
                commentsItem.classList.add('commentsItem')
                console.log(comments)
                comments.map(item=>{
                    commentsItem.innerHTML +=`
                    <h3>comment ID: ${item.id}<br>comment name: ${item.name}<br>email: ${item.email}<br>comment body: ${item.body}</h3>
                    `
                })
                postItem.appendChild(commentsItem)

            })

    })
