// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
const arrClass = []
const f1=(startElement)=>{
    if(startElement.children.length){
        for (const element of startElement.children) {
            let classTag = element.classList
            for (const classTagElement of classTag) {
                arrClass.push(classTagElement)
            }
            f1(element)
        }
    }
}
f1(document.body)
console.log(arrClass)