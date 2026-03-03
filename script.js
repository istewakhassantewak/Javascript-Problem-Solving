// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school.Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses(Gryffindor(length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville", "Ginny", "Fred", "George"];
let house = [];
for (const student of students) {
    if (student.length < 6) {
        house.push(student + " is in Gryffindor");
    } else if (student.length < 8) {
        house.push(student + " is in Hufflepuff");
    } else if (student.length < 12) {
        house.push(student + " is in Ravenclaw");
    } else {
        house.push(student + " is in Slytherin");
    }


}
console.log(house);
// The Double Trouble: You are tasked with writing a function that doubles each element in an array.However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function doublearray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 0 || arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            result.push(arr[i] + arr[i]);
        } else {
            result.push(arr[i]);

        }
    }
    return result;
}
let array = ["a", "a", "b", "b", "c", "s", "s", "d", "e", "e"];
console.log(doublearray(array));

// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original.Write a function that appends the reversed version of the original string to itself.
let str = "Hello";
console.log("Original string: " + str);
function mirrorString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str;
}
console.log(mirrorString(str));


// The Password Validator: You are building a password validation feature.Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let password = prompt("Enter your password:");
function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(password)) {
        return "Password must contain at least one digit.";
    } else {
        return "Password is valid.";
    }
}
console.log(validatePassword(password));
// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number.Write a function that performs this summation.
let array1 = [1, 2, 3, -1, 4, 5];
function sumarray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            break;
        } else {
            sum += arr[index];
        }
    }
    return sum;
}
console.log(sumarray(array1));

// The Vowel Counter: You need to create a function that counts the number of vowels in a given string.Consider both uppercase and lowercase vowels.
let string = "Hello World";
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels(string)); 1223
// The Local Storage Manager: You are working on a note - taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}
let note = {
    title: "Meeting Notes",
    content: "Discuss project timeline and deliverables."
};
saveNoteToLocalStorage(note);
// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
let numbers = [1, 2, 3, 4, 5];
async function asyncMap(arr) {
    return arr.map(num => new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    }));
}
asyncMap(numbers).then(results => {
    console.log(results);
});



// The Asynchronous Shopper: Imagine you are building an online shopping application.Write an asynchronous function called placeOrder that simulates placing an order and returns a promise.The promise should resolve with an order confirmation message after a random delay.
async function placeorder(order) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Order placed successfully! Your order number is " + Math.floor(Math.random() * 1000));
        }, Math.random() * 2000);
    });

}
placeorder("Laptop").then(message => {
    console.log(message);

});



// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously.Write an async function named brewCoffee that takes the type of coffee and returns a promise.The promise should resolve with a message indicating that the coffee is ready after a random delay.
async function brewCoffee(type) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(type + " is ready! Enjoy your coffee.");
        }, Math.random() * 3000);
    });
}
brewCoffee("Espresso").then(message => {
    console.log(message);
});


// The Array Filterer: You are building a search feature for your e - commerce site.Write a function named filterProducts that takes an array of product objects and a filter criterion.The function should return a new array containing only the products that match the filter criterion.
let products = [
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "Headphones", category: "Electronics", price: 199 },
    { name: "Coffee Maker", category: "Home Appliances", price: 49 },
    { name: "Smartphone", category: "Electronics", price: 699 },
    { name: "Blender", category: "Home Appliances", price: 29 }
];
function filterProducts(products, criterion) {
    return products.filter(product => product.category === criterion);
}
console.log(filterProducts(products, "Electronics"));


// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens.Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.
function setAuthToken(token, expirationTime) {
    const expirationDate = new Date().getTime() + expirationTime;
    localStorage.setItem("authToken", token);
    localStorage.setItem("tokenExpiration", expirationDate);
}
setAuthToken("abc123", 3600000); // Token expires in 1 hour


// The Shopping Cart Totalizer: You are working on an e - commerce website, and you need to calculate the total cost of items in the shopping cart.Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
let cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Headphones", price: 199, quantity: 2 },
    { name: "Coffee Maker", price: 49, quantity: 1 }
];
function calculateTotal(cart) {
    if (cart.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < cart.length; i++) {
            cart[i].total = cart[i].price * cart[i].quantity;
        }
        return cart.reduce((acc, item) => acc + item.total, 0);
    }
}
console.log(calculateTotal(cart));



// The Window Scroller: You are developing a single - page application with a smooth scrolling effect.Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
smoothScrollToTop();
