'use strict';

//задание 1
console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild);

//задание 2
let elems = document.querySelectorAll('li');
for(let elem of elems){
    elem.classList.add('list-item');
}
console.log(elems);


//задание 3
let a = prompt('Введите количество блоков');

for(let i = 1;i <= a; i++){
    let div = document.createElement('div');
    div.className = 'block';
    div.innerHTML = `${i} блок`;
    document.body.append(div);
}

//задание 4
let form = document.createElement('form');
let inputt = document.createElement('input')
let inputt2 = document.createElement('input')
let button = document.createElement('button');
button.className = 'btn';

document.body.append(form);
document.body.lastElementChild.append(inputt, inputt2, button);
button.innerHTML = 'Отправить';
inputt.placeholder = 'Имя';
inputt2.placeholder = 'Email';

