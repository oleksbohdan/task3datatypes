console.log(1/-0);


let amount = +prompt('Скільки у вас грн.?');
if(amount === undefined || amount === null || isNaN(amount) || amount === 0){
    alert('Було введено некоректну кількість.');
}else{
    let units = [['dollar','euro', 'brent', 'gold'],
        ['dollar(s)', 'euro(s)', 'barrel(s)', 'gram(s) of 999 fine gold']];
    let measurement_unit = "";
    units[0].forEach(function (element) {
        measurement_unit += `${element} `;
    });
    measurement_unit = prompt(`Одиниця вимірювання, в яку ви хочете конвертувати. (${measurement_unit})`);
    if(measurement_unit === undefined || measurement_unit === null || !units[0].includes(measurement_unit)){
        alert('Одиниця вимірювання не введена або не знайома. ');
    }else {
        switch (measurement_unit) {
            case units[0][0]:
                amount /= 27.1;
                break;
            case units[0][1]:
                amount /= 29.4;
                break;
            case units[0][2]:
                amount /= 27.1 * 20;
                break;
            case units[0][3]:
                amount /= 1455;
                break;
        }
        alert(`${amount} ${units[1][units[0].indexOf(measurement_unit)]}`);
    }
}

let sum = +prompt("Введіть суму замовлення.");
if(sum > 0 && sum < 500){
    alert(`Сума з урахуванням знижки ${sum - sum * 0.01}`);
}else if(sum <= 1000 && sum >= 500){
    alert(`Сума з урахуванням знижки ${sum - sum * 0.05}`);
}else if(sum > 1000){
    alert(`Сума з урахуванням знижки ${sum - sum * 0.1}, з урахуванням сертифікату ${sum - sum * 0.1 + 200}`)
}


let score = 0;
let questions = [
    ["Скільки вершин у паралелограма?", "4"],
    ["Як звали головного героя роману \"Хіба ревуть воли, як ясла повні?\"", "Чіпка"],
    ["Яка висота г.Говерла?", "2061"],
    ["Скільки налічується областей в Україні? (не враховуючи АР Крим)", "24"],
    ["Рік проголошення акту незалежності України.", "1991"]
];

questions.forEach(function (element,index,array) {
    if(prompt(element[0]) === element[1]){
        score++;
    }
    if (index === (array.length - 1) && score === 5){
        score++;
    }
    console.log(score);
});
alert('Ваш результат ' + score + ' бали (-ів).');


let number = prompt("Введіть число.");
number = number.toString().split('');
let arrOccurrencesOfEach = [[],[]];
number.forEach(function (value, index, array) {
    if (!arrOccurrencesOfEach[0].includes(value)){
        arrOccurrencesOfEach[0].push(value);
        let counter = 0;
        for(let i = index; i < array.length; i++){
            if (value === array[i]){
                counter++;
            }
        }
        arrOccurrencesOfEach[1].push(counter);
    }
});
console.log(`In number ${number.join('')}: `);
arrOccurrencesOfEach[0].forEach(function (value, index) {
    console.log(`${arrOccurrencesOfEach[1][index]} occurrence(s) of ${arrOccurrencesOfEach[0][index]} `);
});


let chars = [
    ['1', '!'],
    ['2', '@'],
    ['3', '#'],
    ['4', '$'],
    ['5', '%'],
    ['6', '^'],
    ['7', '&'],
    ['8', '*'],
    ['9', '('],
    ['0', ')'],
    ['-', '_'],
    ['=', '+']
];
let promptValue = prompt('Натисність на одну з клавіш від 1 до =');
chars.forEach(function(value){
    if(value[0] === promptValue){
        alert("З натиснутим Shift'ом буде " + value[1])
    }
});
