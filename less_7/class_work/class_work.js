// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineCapacity = engineCapacity
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (let carKey in this) {
//             if (typeof this[carKey] !== 'function') {
//                 console.log(` ${carKey} - ${this[carKey]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed+ newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.addDriver = driver
//     }
// }
//
// let car = new Car('avensis', 'toyota', 2007, 220, '1789cm3')
// car.drive()
// car.info()
// car.increaseMaxSpeed(50)
// car.changeYear(2018)
// car.addDriver({name: 'alex', age: 1989, status: true})
// console.log(car)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         for (let carKey in this) {
//             console.log(`${carKey} - ${this[carKey]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//     }
//
//     addDriver(driver) {
//         this.addDriver = driver
//     }
//
// }
//
// let car = new Car('avensis', 'toyota', 2007, 220, '1789cm3')
// car.drive()
// car.info()
// car.increaseMaxSpeed(50)
// car.changeYear(2020)
// car.addDriver({name:"fedya", age:35, status: false})
// console.log(car)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Girl {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// const girls = [
//     new Girl('anna', 18, 35),
//     new Girl('nina', 23, 36),
//     new Girl('nady', 32, 37),
//     new Girl('katy', 30, 32),
//     new Girl('guliy', 24, 33),
//     new Girl('inna', 23, 34),
//     new Girl('lena', 22, 36),
//     new Girl('lana', 21, 37),
//     new Girl('geny', 20, 38),
//     new Girl('vika', 19, 39),
// ]
// console.log(girls)
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Man {
//     constructor(name, age, sizeShoes) {
//         this.name = name;
//         this.age = age;
//         this.sizeShoes = sizeShoes;
//     }
// }
//
// const man = new Man('sasha', 33, 33)
// console.log(man)
//
// // //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let wedding = (girls, man) => {
//     for (let girlElement of girls) {
//         if (girlElement.size === man.sizeShoes) {
//             return `${girlElement.name} and ${man.name} very happy`
//         }
//     }
// }
// console.log(wedding(girls, man))
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let happyGirl = girls.find(item=>item.size === man.sizeShoes)
// console.log(happyGirl)
