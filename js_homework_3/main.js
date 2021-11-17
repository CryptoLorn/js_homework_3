/*
    --створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль

    let arrNum = [5,39,43,16,87];
    console.log(arrNum);

    let arrStr = ['Понеділок','Вівторок','Середа','Четверг','Пятниця'];
    console.log(arrStr);

    let arr = ['Місяць',546,true,7,false];
    console.log(arr);*/


//--------------------------------------------------------------------------


/*
-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
arr[0] = 25;
arr[1] = 'Hello';
arr[2] = true;
console.log(arr[0], arr[1], arr[2]);*/


//--------------------------------------------------------------------------


/*
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++){
    document.write('<div>Hello!</div>');
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++){
    document.write(`<div>Hello! ${i}</div>`);
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while(i < 20){
    document.write(`<h1>World</h1>`);
    i++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while(j < 20){
    document.write(`<h1>World ${j}</h1>`);
    j++;
}*/


//--------------------------------------------------------------------------


/*
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrNum = [25,36,95,1,8,2,65,100,74,15];

for (let i = 0; i<arrNum.length; i++){
    console.log(arrNum[i]);
}


//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrStr = ['January','February','March','April','May','June','July','August','September','October'];

for (let i = 0; i < arrStr.length; i++){
    console.log(arrStr[i]);
}


//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr = [46,96,'Hello','World',true,false,656,'The','End',27];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array = [46,'Hello','World',true,{},false,656,'The','End',27];

for (let i = 0; i < array.length; i++){
    if (typeof array[i] === "boolean"){
        console.log(array[i]);
    }
}


//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr = [46,'Hello','World',true,13,false,656,'The','End',27];

for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "number"){
        console.log(arr[i]);
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr = [46,'Hello','World',true,13,false,656,'The','End',27];

for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "string"){
        console.log(arr[i]);
    }
}*/


//--------------------------------------------------------------------------

/*
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    let arr = [];

    arr[0] = 25;
    arr[1] = 'Normal';
    arr[3] = true;
    arr[4] = {};
    arr[5] = 'Best';
    arr[6] = 69;
    arr[7] = false;
    arr[8] = {};
    arr[9] = 'Guys';
    arr[10] = 55;

    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }


    //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let i = 0; i < 10; i++){
        console.log(i);
        document.write(i);
    }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let i = 0; i < 100; i++){
        console.log(i);
        document.write(i);
    }


//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    for (let i = 0; i < 100; i+=2){
        console.log(i);
        document.write(i);
    }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    for (let i = 0; i < 100; i++){
        if (i % 2 === 0 && i !== 0){
            console.log(i);
            document.write(i);
        }
    }


    //- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    for (let i = 0; i < 100; i++){
        if (i % 2 === 1){
            console.log(i);
            document.write(i);
        }
    }*/