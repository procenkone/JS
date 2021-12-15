let goods = JSON.parse(localStorage.getItem('goods'))
let goodsWrap = document.querySelector('.goodsWrap')

goods.map((item,index)=>{
    let itemGoods = document.createElement('div')
    itemGoods.classList.add('itemGoods')
    itemGoods.innerHTML += `
    <h3>${item.title}</h3>
    <img src=${item.img} alt=${item.title}>
    <p>cost: ${item.cost}; quantity: ${item.quantity}</p>
    `
    let btnDel = document.createElement('button')
    btnDel.innerText = 'delete'
    itemGoods.appendChild(btnDel)
    btnDel.onclick = function (){
        goods.splice(index,1)
        localStorage.setItem('goods', JSON.stringify(goods))
        location.reload()
    }
    goodsWrap.appendChild(itemGoods)
})
let deleteAll = document.querySelector('.deleteAll')
deleteAll.onclick=()=>{
    goods = []
    localStorage.setItem('goods', JSON.stringify(goods))
    location.reload()
}