const students  = [
    {
        id           : 01, 
        name         : "Alamin",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    },
    {
        id           : 02, 
        name         : "Rasel",
        father_name  : "Sahdat",
        Mother_name  : "Asma",
        Phone_number : 0123654724,

    },
    {
        id           : 03, 
        name         : "junayed",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    },
    {
        id           : 05, 
        name         : "Rofiq",
        father_name  : "selim",
        Mother_name  : "Aysa",
        Phone_number : 0123654724,

    },
    {
        id           : 06, 
        name         : "Sohel",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    },
    {
        id           : 07, 
        name         : "Alamin",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    },
    {
        id           : 08, 
        name         : "Rifat",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    },
    {
        id           : 09, 
        name         : "Sagor",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    },
    {
        id           : 10, 
        name         : "Ashik",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    },
    {
        id           : 11, 
        name         : "Hafiz",
        father_name  : "Samad",
        Mother_name  : "Asia",
        Phone_number : 0123654724,

    }
];

const familyNumber = [
    {
        name     : "Al-Amin Hossain",
        Phone    : 012364564274,
        relation : "brather",
        location : "Pangsha"
    },
    {
        name     : "Samad Mollik",
        Phone    : 012364564274,
        relation : "Father",
        location : "Rajbari"
    },
    {
        name     : "Shiful Islam",
        Phone    : 0123645642,
        relation : "brather",
        location : "Dhaka"
    },
    {
        name     : "kamal Hossain",
        Phone    : 012364564274,
        relation : "brather",
        location : "Bahadurpur"
    },
    {
        name     : "Sajjad Hossain",
        Phone    : 012364564274,
        relation : "Friend",
        location : "Cox-Bazar"
    },
    {
        name     : "Hazara",
        Phone    : 012364564274,
        relation : "Sister",
        location : "Dhaka"
    },
];

const devs = [
    {
        id      : 01,
        name    : "Al-Amin Hossain",
        skill   : "javaScript",
        sallary : 150000,
        location: "Rajbari"
    },
    {
        id      : 02,
        name    : "Rakibul Hossain",
        skill   : "MERN",
        sallary : 150000,
        location: "Rajbari"
    },
    {
        id      : 03,
        name    : "Rony",
        skill   : "PHP",
        sallary : 150000,
        location: "Dhaka"
    },
    {
        id      : 04,
        name    : "Sabbir Rahman",
        skill   : "javaScript",
        sallary : 10000,
        location: "Dhaka"
    },
    {
        id      : 05,
        name    : "Rimon",
        skill   : "Dhaka",
        sallary : 50000,
        location: "Django"
    },
    {
        id      : 06,
        name    : "Omit",
        skill   : "GoLan",
        sallary : 1000,
        location: "Rajbari"
    },
    {
        id      : 07,
        name    : "Jalal Uddin",
        skill   : "javaScript",
        sallary : 18600,
        location: "Rajbari"
    },
    {
        id      : 08,
        name    : "Musfiqur Rahim",
        skill   : "Laravel",
        sallary : 18600,
        location: "Mirpur"
    },
]
console.log(JSON.stringify(students));
console.log(JSON.stringify(familyNumber));
console.log(JSON.stringify(devs));

let studentObject = '[{"id":1,"name":"Alamin","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556},{"id":2,"name":"Rasel","father_name":"Sahdat","Mother_name":"Asma","Phone_number":21977556},{"id":3,"name":"junayed","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556},{"id":5,"name":"Rofiq","father_name":"selim","Mother_name":"Aysa","Phone_number":21977556},{"id":6,"name":"Sohel","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556},{"id":7,"name":"Alamin","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556},{"id":8,"name":"Rifat","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556},{"id":9,"name":"Sagor","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556},{"id":10,"name":"Ashik","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556},{"id":11,"name":"Hafiz","father_name":"Samad","Mother_name":"Asia","Phone_number":21977556}]';

let devsObject = '[{"name":"Al-Amin Hossain","Phone":1406331068,"relation":"brather","location":"Pangsha"},{"name":"Samad Mollik","Phone":1406331068,"relation":"Father","location":"Rajbari"},{"name":"Shiful Islam","Phone":21973922,"relation":"brather","location":"Dhaka"},{"name":"kamal Hossain","Phone":1406331068,"relation":"brather","location":"Bahadurpur"},{"name":"Sajjad Hossain","Phone":1406331068,"relation":"Friend","location":"Cox-Bazar"},{"name":"Hazara","Phone":1406331068,"relation":"Sister","location":"Dhaka"}]';

let familyObject = '[{"id":1,"name":"Al-Amin Hossain","skill":"javaScript","sallary":150000,"location":"Rajbari"},{"id":2,"name":"Rakibul Hossain","skill":"MERN","sallary":150000,"location":"Rajbari"},{"id":3,"name":"Rony","skill":"PHP","sallary":150000,"location":"Dhaka"},{"id":4,"name":"Sabbir Rahman","skill":"javaScript","sallary":10000,"location":"Dhaka"},{"id":5,"name":"Rimon","skill":"Dhaka","sallary":50000,"location":"Django"},{"id":6,"name":"Omit","skill":"GoLan","sallary":1000,"location":"Rajbari"},{"id":7,"name":"Jalal Uddin","skill":"javaScript","sallary":18600,"location":"Rajbari"},{"id":8,"name":"Musfiqur Rahim","skill":"Laravel","sallary":18600,"location":"Mirpur"}]';

console.log(devsObject, devsObject, familyObject );

console.log(JSON.parse(studentObject));
console.log(JSON.parse(devsObject));
console.log(JSON.parse(familyObject));