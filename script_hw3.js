// // Вывод простых чисел

// newItter:
// for (let i = 2; i <= 100; i++) {
//     let num = 2;
//     while (num < i) {
//         if (i % num == 0) {
//             continue newItter;
//         }
//         num++;
//     }
//     console.log(i);
// } 
// // В целом логику продумал сам, но не смог верно написать вложенный цикл, подсмотрел в интернете решение и переделал его с циклом while 

// 3 задание

// var userBasket = [
//     {
//         title: "Товар 1",
//         price: 100,
//         count: 3
//     },
//     {
//         title: "Товар 2",
//         price: 200,
//         count: 2
//     },
//     {
//         title: "Товар 3",
//         price: 300,
//         count: 1
//     },
// ];

// function countBasketPrice(produsts) {
//     var sumBasket = 0;
//     for (item of produsts) {
//         sumBasket = sumBasket + item.price * item.count;
//     }
//     return sumBasket;
// }

// console.log(countBasketPrice(userBasket));

// // 4 задание

// for (i = 1; i < 10; console.log(i++)) {

// }

// 5 задание

var arr = [];

for (i = 0; i < 20; i++) {
    arr.push("*");
    console.log(arr.join(''));
}


