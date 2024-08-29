///TASK 1

const numbers = [1, 2, 3, 4, 5];
const number = numbers.map((num) => num ** 2);
console.log(number);

///TASK 2

const numbers1 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const num1 = numbers1.filter((num) => num % 2 === 0);
console.log(num1);

///TASK 3

const numbers2 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const sumAllNumbers = numbers2.reduce((num2, num3) => num2 + num3, 0);

console.log(sumAllNumbers);

///TASK 4

const users = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariane", lastName: "Grande", age: 18, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];
const naruto = users.find((user) => user.firstName === "Naruto");

console.log(naruto);

///TASK 5

const users2 = [
    { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
     { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
     { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
     { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male"},
    ]
    const transformedUsers = users.map(user => ({
        fultName: `${user.firstName} ${user.lastName}`,
        age: user.age,
        gender: user.gender
    }));

    console.log(transformedUsers);

///TASK 6

const users3 = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];
const usersGender = users3.filter((user) => user.gender === "female");
console.log(usersGender);

///TASK 7

const numbers3 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const oddNumbers = [];
let badNumbers = 0;

numbers3.forEach((number) => {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
    badNumbers += number;
  }
});

console.log(oddNumbers);
console.log(badNumbers);

///TASK 8

const numbers4 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const index = numbers4.findIndex((number) => number === 34);

console.log(index);
