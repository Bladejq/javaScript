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
a = [33,44,55,0,11,7,8,9];

function a_sum() {
    let s = 0;
    let s2 = 1;
    for(let i=0; i<a.length;i++) {
        if(a[i] = 0) {
            s2 *= a;
        }else{
            s += a;
        }
    }
    console.log(s);
    console.log(s2);
}
a_sum();
