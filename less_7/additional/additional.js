// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
// class User {
//     constructor(id, name, username, email, phone, website) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address ={
//              addAddress(street, suite, city, zipcode) {
//                 this.street = street;
//                 this.suite = suite;
//                 this.city = city;
//                 this.zipcode = zipcode;
//                 this.geo = {
//                     addGeo(lat, lng) {
//                         this.lat = lat;
//                         this.lng = lng;
//                     }
//                 };
//             }
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company ={
//             addCompany (name,catchPhrase,bs){
//                 this.name = name;
//                 this.catchPhrase = catchPhrase;
//                 this.bs = bs;
//             }
//         };
//     };
// }
// const user = new User(1,'alex','procenko','procenkone@gmail.com','0975668085', 'www.alex.com');
// user.address.addAddress('aviaciyna','Apt. 556','lviv','81500');
// user.address.geo.addGeo('-37.3159','81.1496');
// user.company.addCompany('Romaguera-Crona','Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class TagDescription {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     };
// }
//
// const tagA = new TagDescription(
//     '<a>',
//     ' является одним из важных элементов HTML и предназначен для создания ссылок.',
//     [{name: 'accesskey', description: 'Активация ссылки с помощью комбинации клавиш.'},
//         {name: 'coords', description: 'Устанавливает координаты активной области.'},
//         {name: 'download', description: 'Предлагает скачать указанный по ссылке файл.'}
//     ]);
// const tagDiv = new TagDescription(
//     '<div>',
//     'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{name: 'align', description: 'Задает выравнивание содержимого тега'},
//         {name: 'title', description: 'Добавляет всплывающую подсказку к содержимому.'},
//     ]);
// const tagH1 = new TagDescription(
//     '<h1>',
//     'представляет собой наиболее важный заголовок первого уровня',
//     [{name: 'align', description: 'Определяет выравнивание заголовка.'},
//     ]);
// const tagSpan = new TagDescription(
//     '<span>',
//     'предназначен для определения строчных элементов документа. ',
//     [{name: 'Для этого тега доступны универсальные атрибуты и события.'},
//     ]);
// const tagInput = new TagDescription(
//     '<input>',
//     'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     [{
//         name: 'accept',
//         description: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
//     },
//         {name: 'autofocus', description: 'Устанавливает фокус в поле формы.'},
//     ]);
// const tagForm = new TagDescription(
//     '<form>',
//     'устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     [{name: 'action', description: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {name: 'autocomplete', description: 'Включает автозаполнение полей формы.'},
//         {name: 'method', description: 'Метод протокола HTTP.'}
//     ]);
// const tagOption = new TagDescription(
//     '<option>',
//     'определяет отдельные пункты списка, создаваемого с помощью контейнера select.',
//     [{name: 'disabled', description: 'Заблокировать для доступа элемент списка.'},
//         {name: 'label', description: 'Указание метки пункта списка.'},
//         {name: 'selected', description: 'Заранее устанавливает определенный пункт списка выделенным.'}
//     ]);
// const tagSelect = new TagDescription(
//     '<select>',
//     'позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     [{name: 'accesskey', description: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {name: 'autofocus', description: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//         {name: 'disabled', description: 'Блокирует доступ и изменение элемента.'}
//     ]);
// const allTag = [tagA, tagDiv, tagH1, tagSpan, tagInput, tagForm, tagOption, tagSelect];
// console.log(allTag);