/**
 * class practice code-----------
 */

// const devs = [
//     {
//         id       : 01,
//         name     : "Alamin",
//         skill    : "java",
//         age      : 15,
//     },
//     {
//         id       : 02,
//         name     : "Jillur",
//         skill    : "wordpress",
//         age      : 15,
//     },
//     {
//         id       : 03,
//         name     : "Alamin",
//         skill    : "javascript",
//         age      : 15,
//     },
//     {
//         id       : 04,
//         name     : "Alamin",
//         skill    : "java",
//         age      : 15,
//     },
//     {
//         id       : 05,
//         name     : "Sajjad",
//         skill    : "wordpress",
//         age      : 15,
//     },
// ];

// let data = JSON.stringify(devs);
// console.log(data);


let data = '[{"id":1,"name":"Alamin","skill":"java","age":15},{"id":2,"name":"Jillur","skill":"wordpress","age":15},{"id":3,"name":"Alamin","skill":"javascript","age":15},{"id":4,"name":"Alamin","skill":"java","age":15},{"id":5,"name":"Sajjad","skill":"wordpress","age":15}]'

let ob  = JSON.parse(data);
console.log(ob);
