// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


 function goodMorning() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('good morning')
                resolve()
            }, 3000)
        }
    )
}

 function wash() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('wash')
            resolve()
        }, 2000)
    })
}

function breakfast(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('breakfast')
            resolve()
        },2000)
    })

}

function goTojob(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('go to job')
        resolve()
    },2000)
    })
}

function lunch(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log('lunch')
            resolve()
        },1000)
    })

}

function goToHome(){
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           console.log('go to home')
           resolve()
       },1000)
   })
}

function dinner(){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          console.log('dinner')
          resolve()
      },2000)
  })
}

function playStation(){
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           console.log('play station')
           resolve()
       },900)
   })
}

function sleep(){
   return new Promise((resolve)=>{
       setTimeout(()=>{
           console.log('sleep')
           resolve()
       },1500)
   })
}
//
// goodMorning()
//     .then(result=>{
//         return wash()
//     })
//     .then(result=>{
//         return breakfast()
//     })
//     .then(result=>{
//         return goTojob()
//     })
//     .then(result=>{
//         return lunch()
//     })
//     .then(result=>{
//         return goToHome()
//     })
//     .then(result=>{
//         return dinner()
//     })
//     .then(result=>playStation())
//     .then(result=>sleep())


//---------------------------------------------------
async function myDay() {
    await goodMorning()
    await wash()
    await breakfast()
    await goTojob()
    await lunch()
    await goToHome()
    await dinner()
    await playStation()
    await sleep()
}
myDay()