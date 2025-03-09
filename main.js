let bankAccount = {
    ownerName: 'Іван Петренко',
    accountNumber: 'UA1234567890',
    balance: 1000,

    deposit: function (amount) {
        this.balance += amount;
        alert(`Зняття успешне! Ваш новий баланс ${this.balance}`);
    },

    withdraw: function (amount) {
        if (amount > this.balance){
            alert('Недостатньо коштів на рахунку!');
        } else {
            this.balance -= amount;
            alert(`Зняття успішне! Ваш новий рахунок ${this.balance}`);
        }
    }
};

let action = confirm("Хочете поповнити рахунок? Натисніть 'OK'. Якщо хочете зняти гроші, натисніть 'Скасувати'.");
if (action) {
    let amount = parseFloat(prompt('Введіть суму для поповнення'));
    if (!isNaN(amount) && amount > 0){
        bankAccount.deposit(amount);
    } else {
        alert('Некоректна сума!');
    }
} else {
    let amount = parseFloat(prompt('Введіть суму для зняття'));
    if (!isNaN(amount) && amount > 0){
        bankAccount.withdraw(amount);
    } else {
        alert('Некоректна сума!');
    }
}
console.log(bankAccount);

let weather = {
    temperature: null,
    humidity: 50,
    windSpeed: 10,

    checkTemp: function () {
        return this.temperature < 0;
    }
}

let tempInput = (prompt('Введіть температуру в цельсіях'));
weather.temperature = parseFloat(tempInput);

if (!isNaN(weather.temperature)){
    if (weather.checkTemp()){
        alert('Температура нижче 0 градусів на цельсію!')
    } else{
        alert('Температура вищче 0 градусів на цельсію')
    }
} else {
    alert("Помилка! Введіть коректне число!")
}

let user = {
    name: "John Doe",
    email: "john@example.com",
    password: "123456",
    login: function(inputEmail, inputPassword) {
        return this.email === inputEmail && this.password === inputPassword;
    }
};

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighRated: function() {
        return this.rating > 8;
    }
};

console.log(user);
console.log(movie);
console.log("Login success:", user.login("john@example.com", "123456"));
console.log("Is high-rated movie:", movie.isHighRated());
