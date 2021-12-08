// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let users = {}
document.forms.task1.onsubmit=()=>{
    users.name = document.forms.task1.name.value
    users.age = document.forms.task1.age.value
    localStorage.setItem('users', JSON.stringify(users))
}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let cars = JSON.parse(localStorage.getItem('cars')) || []
document.forms.task2.onsubmit=()=>{
    let objCar = {}
    objCar.model = document.forms.task2.model.value
    objCar.type = document.forms.task2.type.value
    objCar.volume = document.forms.task2.volume.value
    cars.push(objCar)
    localStorage.setItem('cars', JSON.stringify(cars))
}
