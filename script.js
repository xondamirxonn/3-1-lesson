// let math = Math.floor(Math.random()* 6);

// alert(math)

// let fName = prompt("Ismingizni kiritng:");
// let lName = prompt("Familiyangizni kiritng:");

// alert( fName +  lName  )

// let age = 19

// console.log(age)

// age = 20;

// console.log(age)

let fName = prompt("Ismingizni kiritng:");
let lName = prompt("Familiyangizni kiritng:");
let email = prompt("Emailingizni  kiritng:");
let password = prompt("Parolingizni kiritng:");
let age = prompt("Yoshingiz kiriting :");
let married = prompt("Uylanganmisiz");
let skills = prompt("Dasturlash tilini bilasizmi");
let yashashJoyingiz = prompt("Davlatingiz");
let city = prompt("Shahar yo viloyat");
let tuman = prompt("Tumaningiz");
let mahalla = prompt("Mahallangiz");

let yashashJoy = {
  Davlatingiz: yashashJoyingiz,
  Shahar_yo_viloyatingiz: city,
  tumaningiz: tuman,
  mahallangiz: mahalla,
};

console.log(
  "Ma'lumotlaringiz\n" +
    "Ismingiz " +
    fName +
    " " +
    " \nFamiliyangiz " +
    lName +
    "\nEmailingiz " +
    email +
     " \nParolingiz " +
     password +  
    " \nYoshingiz " +
    age +
    "\nDasturlash tilini bilsizmi: " +
    skills +
    "\nMen " +
     yashashJoyingiz +
    " da yashayman " +
     city +
    " shahar(viloyat)ida " +
    tuman +
    " tumanida " +
     mahalla +
    " mahallasida istiqomad qilaman "
);

let person = {
  name: fName,
  lastname: lName,
  email: email,
  password: password,
  age: age,
  Married: married,

  dasturlash_tilini_bilasizmi: skills,

  manzil: yashashJoy,
};

console.log(person);
