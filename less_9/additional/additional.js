// - Є масив :
    let courses = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
            logo: '',
            price: 0,
            rating: 5,
            avgResult: 99
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced'],
            logo: '',
            price: 0,
            rating: 4.998,
            avgResult: 97
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'python core',
                'python advanced'],
            logo: '',
            price: 0,
            rating: 4.812,
            avgResult: 98
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
            logo: '',
            price: 0,
            rating: 4.65,
            avgResult: 97
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java'],
            logo: '',
            price: 0,
            rating: 4.772,
            avgResult: 100
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
            logo: '',
            price: 0,
            rating: 4.53,
            avgResult: 90
        }
    ];
document.body.style.display = 'flex'
document.body.style.justifyContent = 'space-between'
for (const cours of courses) {
    let block = document.createElement('div')
    block.innerHTML += `
    <h1> ${cours.title}</h1>
    <h2>monthDuration: ${cours.hourDuration}<br> hourDuration: ${cours.hourDuration}</h2>
    `
    for (const cour of cours.modules) {
        block.innerHTML += `<div> -${cour}</div>`
    }
    block.innerHTML += `
    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-64.png" alt='logo'>
    <p>price: ${cours.price}</p>
    <p>rating: ${cours.rating}</p>
    <p>avgResult: ${cours.avgResult}</p>
    `
    document.body.appendChild(block)
}
// Створити під кожен елемент коремий блок. В цьому блоці, під кожну властивість, створити окремий блок. Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)
