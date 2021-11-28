// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)
const users = []
for (let i = 1; i <= 10; i++) {
    users.push(new User(i, 'sasha'+i, 'procenko'+i, 'procenkone'+i+'@gmail.com', ' 097'+i+'6'+i+'8'+i+'85'),
    );
}
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let userFilter = users.filter(item=>item.id %2 === 0);
// console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userSort = users.sort((a,b)=> b.id - a.id );
// console.log(userSort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     };
// }


// створити пустий масив, наповнити його 10 об'єктами Client
// let clientArr = [
//     new Client(1,'sasha', 'procenko', 'procenkone@gmail.com','0975668085', ['tv','phone']),
//     new Client(2,'sasha2', 'procenko2', 'procenkone2@gmail.com','097222222', ['tv','phone','notebook']),
//     new Client(3,'sasha3', 'procenko3', 'procenkone3@gmail.com','097333333', ['tv','phone','notebook','fff']),
//     new Client(4,'sasha4', 'procenko4', 'procenkone4@gmail.com','097444444', ['tv','phone','notebook','fff','vvvvvv']),
//     new Client(5,'sasha5', 'procenko5', 'procenkone5@gmail.com','097555555', ['tv','phone','notebook','fff','vvvvvv','hhhhhh']),
//     new Client(6,'sasha6', 'procenko6', 'procenkone6@gmail.com','097666666', ['tv','phone','notebook','fff','vvvvvv','hhhhhh','gggggg']),
//     new Client(7,'sasha7', 'procenko7', 'procenkone7@gmail.com','097777777', ['tv','phone','notebook','fff','vvvvvv','hhhhhh','gggggg','tttttt']),
//     new Client(8,'sasha8', 'procenko8', 'procenkone8@gmail.com','097888888', ['tv','phone','notebook','fff','vvvvvv','hhhhhh','gggggg','tttttt','rrrrrr']),
//     new Client(9,'sasha9', 'procenko9', 'procenkone9@gmail.com','097999999', ['tv','phone','notebook','fff','vvvvvv','hhhhhh','gggggg','tttttt','rrrrrr', 'ssssss']),
//     new Client(10,'sasha10', 'procenko10', 'procenkone10@gmail.com','097101010', ['tv','phone','notebook','fff','vvvvvv','hhhhhh','gggggg','tttttt','rrrrrr', 'ssssss','lll']),
// ];
// console.log(clientArr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let orderSort = clientArr.sort((a,b)=>b.order.length - a.order.length);
// console.log(orderSort);