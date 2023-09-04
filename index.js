// 1 тапсырма
let user = [
    {name:"Bob", Age:34},
    {name:"Denny", Age:32},
    {name:"Maks", Age:21},
    ]

let a;

for (let i =0; i<user.length; i++){
    if (user[i].name == "Bob"){
        a = user[i];
    };
}
console.log(a);

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
let b;
for (var i = 0; i < c.length; i++) {
    a = c[i];
    if (a===0){
        break;
    }
    qos +=a;
}
