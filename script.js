// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

// console.log(sum(6)); // 10

// console.log(sum(10)); // 20

// console.log(sum(7)); // 27

const sum = makeSum();
function makeSum() {
    let num = 0;
    return function (el) {
        num += el
        return num
    }
}

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27