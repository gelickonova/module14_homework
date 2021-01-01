let userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')
if (userName !== null) {
    let date = new Date();
    let currentDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    if (localStorage.getItem('name') !== userName) {
        localStorage.setItem('name', `${userName}`);
        localStorage.setItem(`lastDateBy${userName}`, `${currentDate}`);
    } else {

        alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem(`lastDateBy${userName}`)}`)

        localStorage.setItem(`lastDateBy${userName}`, `${currentDate}`);
    }
}
