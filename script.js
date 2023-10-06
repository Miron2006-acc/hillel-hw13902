let yearOfBirth = prompt("Введіть ваш рік народження:");
let city = prompt("Введіть місто, в якому ви живете:");
let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

let message = "Ваші дані:\n\n";
message += "Рік вашого Народження: " + age + "\n";


if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
    let country = "";
    if (city === "Київ") {
        country = "України";
    } else if (city === "Вашингтон") {
        country = "США";
    } else if (city === "Лондон") {
        country = "Великої Британії";
    }
    message += "Ти живеш у столиці " + country + "!";
} else {
    message += "Ти живеш у місті " + city + "!";
}



alert(message);
