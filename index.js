// 1 тапсырма
let user = [
    {name:"Bob", Age:34},
    {name:"Denny", Age:32},
    {name:"Maks", Age:21},
    ]

let b;

for (let i =0; i<user.length; i++){
    if (user[i].name == "Bob"){
        b = user[i];
    };
}
console.log(b);

// 2 тапсырма
let sum = 0;
for(let i=2; i<=9; i++) {
    sum+=i;
}
console.log(sum);

// 3 твпсырма 
c = [33,44,55,0,11,7,8,9];

let qos = 0;
let kob = 1;
let k;
for (var i = 0; i < c.length; i++) {
    k = c[i];
    if (k === 0) {break;}
    qos+=k;}
for(var j = i+1;j<c.length;j++){
    k = c[j];
    kob*=k;}
console.log(qos);
console.log(kob);


// 06.09.2023

// 1 Тапсырма

masive = [1, 2, 3, 4, 5, 6];

for(let i = masive.length - 1; i >= 0; i--) {
    console.log(masive[i]);
}


// 2Тапсырма

var first_num = [1, 2, 3];
var second_num = [4, 5];
 
for (let i of second_num) {
    first_num.push(i);
}
 
console.log(first_num);

// 3 Тапсырма
let shop = {
    "Name":"Alma",
    "Cena":"570tg",
    "salmaq":"3kg"
}
for(i in shop){
    console.log(i + " " + shop[i]);
}

// 4 Тапсырма

let a = [
    {id:1,name:"TEST"}
];
function addData(id,name){
    var user1 = {id:2,name:"QWERTY"};
    var user2 = {id:3,name:"DOG"};
    a.push(user1);
    a.push(user2);
}
addData(4,"ASDFGHJ");

function updData(id,newName){
    var upd = a.find(user =>user.id === id);
    if(upd){
        upd.name = newName;
    }
}

updData(2,"NewName");

function deleteData(id){
    a = a.filter(user => user.id !==id);
}

deleteData(1);

for(let i =0;i<a.length;i++){
    console.log(a[i]);
}

// 5 тапсырма



let city = {
    "city1":"Almaty",
    "city2":"Astana",
    "city3":"Aqtau"
}
let regionAlmaty = {
    "region1":"Auezovskii",
    "region2":"Medeuskii",
    "region3":"Bostandykskii"
}
let regionAstana = {
    "region1":"Isilskii",
    "region2":"Almatinskii",
}
let regionAqtau = {
    "region1":"Tasilinskii"
}

let vscode = () => {
    let cityInput = prompt("Қала атауын жазыңыз");

    if (cityInput == city.city1) {
        for (let i in regionAlmaty) {
            alert(i + " " + regionAlmaty[i])
        }
    } else if (cityInput == city2.city2) {
        for (let j in regionAstana) {
            alert(j + " " + regionAstana[j])
        }
    } else if (cityInput == city.city3) {
        for (let s in regionAqtau) {
            alert(s + " " + regionAqtau)
        }
    }
} 

vscode() 

for (let i = 0; i < 100; i++) {
    console.log("Hello, world!");
}


// Тест
// TEST
// 1 esep

sum = (c2, c1) => {
    return c2 + c1;
  }
  
console.log(sum(70, 80)); 


//  2 есеп

bir = ['kitap'];
eki = ['khana'];

 
let qosu = () => {
    console.log(bir + eki);
}
qosu();

// 3 esep 

ush_massive = [1, 5, 7, 9, 6, 8]
console.log(ush_massive.indexOf(5));

//  4 esep 
let massiv4ik = [
    {id:1,name:"TEST"},
];


addData = (id, name) => {
    let user1 = {id:2,name:"TEST2"};
    let user2 = {id:3,name:"TEST3"}
    massiv4ik.push(user1);
    massiv4ik.push(user2);
}
addData(3, "TEST3")

function deleteData(id) {
    massiv4ik = massiv4ik.filter(user => user.id !==id);
}
deleteData(2);

for(let i =0;i<massiv4ik.length;i++){
    console.log(massiv4ik[i]);
}


// 5 esep 

let san1 = 5;
let san2 = 9;

if (san1 > san2){
    console.log(san1);
} else {
    console.log(san2);
}

// 6 esep
for(let i = 1; i <= 10; i++){
console.log(i);
}

