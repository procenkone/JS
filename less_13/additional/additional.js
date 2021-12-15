// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку  на яку з лс видаляється конкретний обраний  товар

let goods = document.forms.goods
let title = document.goods.title
let quantity = document.goods.quantity
let cost = document.goods.cost
let img = document.goods.img

let goodsArr = JSON.parse(localStorage.getItem('goods')) || []
goods.onsubmit = (e) => {
    e.preventDefault()
    if (title.value && quantity.value && cost.value && img.value !== '') {
        let goodItem = {}
        goodItem = {
            title: title.value,
            quantity: quantity.value,
            cost: cost.value,
            img: img.value,
        }
        goodsArr.push(goodItem)
        localStorage.setItem('goods', JSON.stringify(goodsArr))
        title.value = ''
        quantity.value = ''
        cost.value = ''
        img.value = ''
    } else {
        return false
    }
}
