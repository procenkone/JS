// - Дано натуральное число n. Выведите все числа от 1 до n.
// const f1=(n)=>{
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
// f1(10)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// const f2 = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     } else {
//         for (let i = a; i >= b; i--) {
//             console.log(i)
//         }
//     }
// }
// f2(22, 44)
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let array = [9, 8, 0, 4]
// const f3 = (arr, j)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if(i===j){
//             [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//             // a = arr[i]; arr[i] = arr[i+1]; arr[i] = a
//         }
//     }
// }
// f3(array, 1)
// console.log(array)

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let array = [1,2,0,0,0,10,30,30,18,20,0,18,11,50,0,60,7,80,90,0]
// const f4=(arr)=>{
//     let upperBound = arr.length;
//     for (let i = 0; i < upperBound; i++) {
//         if (arr[i] === 0) {
//             arr.push(0);
//             arr.splice(i, 1);
//             upperBound--;
//             i--;
//         }
//     }
// }
// f4(array)
// console.log(array)
