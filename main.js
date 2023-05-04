// //Масиви та об'єкти:
//
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [1,2,3,4,5,6,"Okten",true, false, 3.14];
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
//
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let obj_1 = {
//     title:'asdf',
//     pageCount: 174,
//     genre: 'comedy'
//
// }
// console.log(obj_1);
// let obj_2 = {
//     title:'Hordon Dmytro',
//     pageCount: 174,
//     genre: 'Tales'
//
// }
// console.log(obj_2);
//
// let obj_3 = {
//     title:'kolobok',
//     pageCount: 174,
//     genre: 'drama'
//
// }
// console.log(obj_3);
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let obj1 = {
//     title:'asdf',
//     pageCount: 174,
//     genre: 'comedy',
// author:[{
//         name:'Vasya',
//     age: 22
// }]
// }
// console.log(obj1);
// let obj2 = {
//     title:'Hordon Dmytro',
//     pageCount: 174,
//     genre: 'Tales',
//     author:[{
//         name:'Ann',
//         age: 22
//     }]
//
// }
// console.log(obj2);
//
// let obj3 = {
//     title:'kolobok',
//     pageCount: 174,
//     genre: 'drama',
//     author:[{
//         name:'Ola',
//         age: 22
//     }]
//
// }
// console.log(obj_3);
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [{
//     name: 'Vasya',
//     usernmae: 'Vasiliy',
//     pasword: 1234567
// },
//     {
//         name: 'Ann',
//         usernmae: 'Anni4ka',
//         pasword: 1234567
//     },
//
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
//     {
//         name: 'Max',
//         usernmae: 'Maximilian',
//         pasword: 1234567
//     },
// ]
// console.log(users[0].pasword);
// console.log(users[1].pasword);
// console.log(users[2].pasword);
// console.log(users[3].pasword);
// console.log(users[4].pasword);
// console.log(users[5].pasword);
// console.log(users[6].pasword);
// console.log(users[7].pasword);
// console.log(users[8].pasword);
// console.log(users[9].pasword);
// //
// //
// //
// //
// //
// // Логічні розгалуження:
// //
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// let x = +prompt('введіть любе число');
// if (x!=0){
//     console.log(true);
// }
//     else{
//     console.log(false);
// }
//
// //
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// //
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// let time = +prompt('enter a minute');
//     if (time>=0 && time < 15){
//         console.log(1);
//     }
//     else if (time>=15 && time<30){
//         console.log(2);
//     }
//     else if (time>=30 && time<45){
//     console.log(3);
// }
//     else if(time>=45 && time< 59){
//     console.log(4);
// }
//         else {
//         console.log('????');
//     }
//
// // (в першу, другу, третю или четверту частину години).
// //
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Введіть число')
// if (day>1 && day<=10){
//     console.log(1);
// }
// else if (day> 10 && day<=20){
//     console.log(2)
// }
// else if (day>20 && day<=30){
//     console.log(3);
// }
// else {
//     console.log('Error');
// }
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let week = prompt('Введіть номер дня тижня');
// switch (week){
//     case 1:
//         console.log('ПОНЕДІЛОК');
//         break;
//     case 2:
//         console.log('ВІВТОРОК');
//         break;
//     case 3:
//         console.log('СЕРЕДА');
//         break;
//     case 4:
//         console.log('ЧЕТВЕР');
//         break;
//     case 5:
//         console.log('ПЯТНИЦЯ');
//         break;
//     case 6:
//         console.log('СУБОТА');
//         break;
//     case 7:
//         console.log('НЕДІЛЯ');
//         break;
//     default:
//         console.log('?');
// }
// //     - Користувач вводить або має два числа.
// //
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //
// //         Також потрібно врахувати коли введені рівні числа.
// //
//  let x = prompt('Chyslo');
// let b = prompt('chyslo');
// if (x>b){
//     console.log(x);
// }
// else if (x<b){
//     console.log(b);
// }
// else if (x===b)
//     console.log('Значення рівні')
// else {
//
//     console.log('?')
// }
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// //
// //
// //
// //
// //
// //
// //
// //     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray.monthDuration>=5){
    console.log('super');
}
else if (coursesAndDurationArray[1].monthDuration>5){
    console.log('super');
}
else if (coursesAndDurationArray[2].monthDuration>5){
    console.log('super');
}
else if (coursesAndDurationArray[3].monthDuration>5){
    console.log('super');
}
else if (coursesAndDurationArray[4].monthDuration>5){
    console.log('super');
}
else if (coursesAndDurationArray[5].monthDuration>5){
    console.log('super');
}
else{
    console.log('zle')
}