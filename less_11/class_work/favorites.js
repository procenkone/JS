let favorites = document.querySelector('.favorites')
let favArr = JSON.parse(localStorage.getItem('favUsers'))
if (favArr) {
    favArr.map(item => {
        favorites.innerHTML += `
    <div>name- ${item.name}, age - ${item.age}, status - ${item.status}</div>
    `
    })
}