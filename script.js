//  Array QUESTION 1
let numbers = [10, 20, 30, 40, 50];
        console.log(numbers)

// Array Question 2
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
console.log(fruits[2]);

// Array question 3

fruits.push("Mango");
console.log(fruits);
 
// Question 4
let num = [10, 20, 30, 40, 50];
console.log(numbers.length);

// Question 5

function hello() {
          console.log("Hello World");
        }
         hello();

//  Question 6
function add(a, b) 
            {
            console.log(a + b); 
        }
            add(10, 20);
            
//     Question 7
function square(num) {
    return num * num;
}

console.log(square(5));


// Question 8
function checkNumber(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkNumber(7);


// Question 9
function largest(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

largest(15, 25);
// Question 10
function welcome(name) {
    console.log("Welcome " + name);
}

welcome("Ali");

// Question 11
let student = {
    name: "Ali",
    age: 18,
    class: "Intermediate"
};

console.log(student.name);
console.log(student.age);
console.log(student.class);

// Question 12
let car = {
    brand: "Toyota",
    model: "Corolla",
    color: "White"
};

console.log(car.brand);
// Question 13

{let student = {
    name: "Ali",
    age: 18
};

student.age = 20;

console.log(student.age);

}

// question 14
function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}
{
let numbers = [10, 20, 30, 40, 50];

console.log(sumArray(numbers));
}
// Question15
{let student = {
    name: "Ali",
    marks: 85
};

function printStudent(student) {
    console.log(student.name);
    console.log(student.marks);
}

printStudent(student);
}