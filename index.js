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
let a;
for (var i = 0; i < c.length; i++) {
    a = c[i];
    if (a === 0) {break;}
    qos+=a;}
for(var j = i+1;j<c.length;j++){
    a = c[j];
    kob*=a;}
console.log(qos);
console.log(kob);


// 06.09.2023

// 1 Тапсырма

masive = [1, 2, 3, 4, 5, 6];

for(let i = masive.length - 1; i >= 0; i--) {
    console.log(masive[i]);
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