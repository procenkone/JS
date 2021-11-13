// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let inp1 = document.querySelector('.inp_1')
let inp2 = document.querySelector('.inp_2')
let btn1 = document.querySelector('.btn_1')
let out1 = document.querySelector('.out_1')
btn1.onclick = () => {
    if (inp1.value > inp2.value) {
        out1.innerHTML = 'перше число більше за друге'
        inp1.value = ''
        inp2.value = ''
    } else if (inp2.value > inp1.value) {
        out1.innerHTML = 'друге число більше за перше'
        inp1.value = ''
        inp2.value = ''
    } else {
        out1.innerHTML = 'числа рівні'
        inp1.value = ''
        inp2.value = ''
    }
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let inpTask2 = document.querySelector('.inp_t_2')
let out2 = document.querySelector('.out_2')
let btn2 = document.querySelector('.btn_2')

btn2.onclick = () => {
    if (inpTask2.value <= 20) {
        out2.innerHTML = 'перший підїзд'
        inpTask2.value = ''
    } else if (inpTask2.value >= 21 && inpTask2.value <= 48) {
        out2.innerHTML = 'другий підїзд'
        inpTask2.value = ''
    } else if (inpTask2.value >= 49 && inpTask2.value <= 90) {
        out2.innerHTML = 'третій підїзд'
        inpTask2.value = ''
    } else {
        out2.innerHTML = 'такої квартири у будинку немає'
        inpTask2.value = ''
    }
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let inp3 = document.querySelector('.inp_3')
let out3 = document.querySelector('.out_3')
let btn3 = document.querySelector('.btn_3')
btn3.onclick = () => {
    if (+inp3.value === 10) {
        out3.innerHTML = 'вірно'
        inp3.value = ''
    } else {
        out3.innerHTML = 'невірно'
        inp3.value = ''
    }
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
let x = []
let out4 = document.querySelector('.out_4')
if (typeof x === 'string') {
    out4.innerHTML = 'string'
} else if (typeof x === 'number') {
    out4.innerHTML = 'number'
} else if (typeof x === 'boolean') {
    out4.innerHTML = 'boolean'
} else if (typeof x === 'object') {
    out4.innerHTML = 'object'
} else out4.innerHTML = 'невідоме значення'

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let inp5 = document.querySelector('.inp_5')
let out5 = document.querySelector('.out_5')
let btn5 = document.querySelector('.btn_5')
btn5.onclick = () => {
    if (inp5.value >= 10 && inp5.value <= 22) {
        out5.innerHTML = 'ми йдемо ВЧИТИСЯ'
        inp5.value=''
    } else{
        out5.innerHTML = 'сидимо вдома і вчимося ОНЛАЙН'
        inp5.value=''
    }
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let inp6 = document.querySelector('.inp_6')
let out6 = document.querySelector('.out_6')
let btn6 = document.querySelector('.btn_6')
btn6.onclick=()=>{
    switch (inp6.value) {
        case '1':
            out6.innerHTML = 'ви виграли автомобіль'
            inp6.value = ''
            break;
        case '2':
            out6.innerHTML = 'ви виграли мотоцикл'
            inp6.value = ''
            break;
        case '3':
            out6.innerHTML = 'ви виграли самокат'
            inp6.value = ''
            break;
        case '4':
            out6.innerHTML = 'ви виграли ролики'
            inp6.value = ''
            break;
        case '5':
            out6.innerHTML = 'ви виграли телефон'
            inp6.value = ''
            break;
        default:
            out6.innerHTML = 'такий номер відсутній'
            inp6.value = ''
            break;
    }
}