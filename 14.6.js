// Создать Promise, в котором c задержкой в 3 секунды
// сгенерировать случайное целое число от 1 до 100.
// Для создания задержки использовать setTimeout.
// Если сгенерированное число — четное, Promise выполнится успешно (resolve),
// если нечетное — выполнится с ошибкой (reject).
// После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:
//
//     «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно.
//     Вместо number подставить сгенерированное число
//
//     «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой.
//     Вместо number подставить сгенерированное число

let x = new Promise(function (resolve, reject) {
    setTimeout((max) => {
        const number = Math.floor(Math.random() * (max + 1));
        // console.log(number);
        if (number % 2 === 0) {
            resolve(number)
        } else reject(number)
    }, 1000, 100)
});
x.then(function (evenNumber) {
    console.log(`Завершено успешно. Сгенерированное число — ${evenNumber}`);
}, function (oddNumber) {
    console.log(`Завершено с ошибкой. Сгенерированное число — ${oddNumber}`);
});