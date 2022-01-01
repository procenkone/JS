let postId = window.location.toString()
let parts = postId.split('=');
let answer = parts[parts.length - 1];
const wrapItemUser = document.getElementsByClassName('wrapItemUser')[0]
const postsTitle = document.createElement('div')
const titlePost = document.getElementsByClassName('titlePost')[0]

fetch(`https://jsonplaceholder.typicode.com/users/${answer}`)
    .then(response => response.json())
    .then(userDetails => {
        let getPost = document.createElement('button')
        getPost.innerText = 'post of current user'
        getPost.className = 'getPost'
        wrapItemUser.innerHTML = `
<div class="userWrap">
        <div class="info">
        <h2>User info</h2>
            <h3>user id :${userDetails.id} <br>
                name: ${userDetails.name} <br>
                userName: ${userDetails.username}<br>
                phone: ${userDetails.phone} <br>
                website: ${userDetails.website}
            </h3>
        </div>
        <div class="address">
            <h2>User address</h2>
            <h3>
             street: ${userDetails.address.street}<br>
             suite: ${userDetails.address.suite}<br>
             city: ${userDetails.address.city}<br>
             zipcode: ${userDetails.address.zipcode}<br>
             suite: ${userDetails.address.suite}<br>
                <div class="geo">
                        lat: ${userDetails.address.geo.lat}<br>
                        lng: ${userDetails.address.geo.lng}
                </div>
            </h3>
        </div>
        <div class="company">
        <h2>User company</h2>
        <h3>
            company name: ${userDetails.company.name}<br>
            catchPhrase: ${userDetails.company.catchPhrase}<br>
            bs: ${userDetails.company.bs}
        <h3></div>
        </div>
        `
        getPost.onclick = () => {
            console.log(userDetails)
            fetch(`https://jsonplaceholder.typicode.com/users/${answer}/posts`)
                .then(response => response.json())
                .then(posts => {

                    posts.map(item => {
                        const postTitleItem = document.createElement('div')
                        postTitleItem.className='postTitleItem'
                        const showPost = document.createElement('button')
                        showPost.innerText = 'post-details'
                        postTitleItem.innerHTML += `
                            <h3>${item.title}</h3>
                        `
                        showPost.onclick = () => {
                            location.href = `post-details.html?Post_Id=${item.id}`
                        }
                        postTitleItem.appendChild(showPost)
                        titlePost.appendChild(postTitleItem)

                    })
                })
        }
        wrapItemUser.appendChild(getPost)
        wrapItemUser.appendChild(postsTitle)

    })

