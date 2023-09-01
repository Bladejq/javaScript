// 1 тапсырма

let clothes = [];

clothes.push('Шапка');
clothes.push('Джинсы');
clothes.push('Рубашка');
clothes.push('Шорты');
clothes.push('Шалстук');

clothes.pop();

console.log(clothes);

// 2 тапсырма

LetterFinder = (Word, Match) => {
    let word = "word";
    let match = "Match"
}
LetterFinder()

// 3 тапсырма
let word = "Nurnaz";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// 4 тапсырма
num = [5, 6, 4, 5, 8, 10];

let index_sum=() => {
    let s = 0;
    for(let i =0; i<num.length;i++) {
        if(i%2 == 0) {
            s+=num[i];
        }
    }
    console.log(s);
}
index_sum();

// 5 тапсырма
const arr = [1,2,3,4,5];
console.log(arr.reverse());

let a = [1, 2, 3, 4, 5];
for(let i = 0; i < a.length;i++) {
    console.log(a[i]);
}

for(let i = a.length - 1; i >= 0; i--) {
    console.log(a[i]);
}