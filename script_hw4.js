

var number = prompt('Введите число от 0 до 999');
console.log(numObj(number));

function numObj(num) {
    var obj = {};
    if (num > 999 || num < 0) {
        console.log("Вы ввели неправильное число, введите снова");
    } else {
        var numString = String(num);
        if (num >= 100) {
            obj.hundreds = numString[0];
            obj.tenner = numString[1];
            obj.units = numString[2];
        } else if (num >= 10 && num < 100) {
            obj.tenner = numString[0];
            obj.units = numString[1];
        } else obj.units = numString[0];
    }
    return obj;
}


