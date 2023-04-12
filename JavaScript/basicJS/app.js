// console.log('Welcome to your JS Playground')

//----- Conditional Statements -----

// const day = 'wednesday'.toLowerCase()

// ----- Using Else If Statements -----
// if (day == 'monday') {
//     console.log('Mondays Suck');
// } else if (day == 'tuesday') {
//     console.log("Tuesday are almost as bad as Mondays");
// } else if (day == 'wednesday') {
//     console.log("Mike Mike Mike, Its HumpDAY!");
// } else if (day == 'thursday') {
//     console.log("Hey it's Friday's Friday!");
// } else if (day == 'friday') {
//     console.log("Ayyyyye Fridayyy bay bay!");
// } else if (day == 'saturday') {
//     console.log("Saturday is for the boys!");
// } else if (day == 'sunday') {
//     console.log("Damn back to work again tomorrow");
// }

// ----- Using Switch Statement -----
// switch (day) {
//     case 'monday':
//         console.log('Monday\'s suck')
//         break;
//     case 'tuesday':
//         console.log('Tuesday are almost as bad as Mondays')
//         break;
//     case 'wednesday':
//         console.log('Mike Mike Mike, it\'s HUMPDAY')
//         break;
//     case 'thursday':
//         console.log('Hey, its Friday\'s Friday!')
//         break;
//     case 'friday':
//         console.log('Ayeeee, It\'s Friday!')
//         break;
//     case 'saturday':
//         console.log('Saturdays are for the boys!')
//         break;
//     case 'sunday':
//         console.log('Damn back to it tomorrow....')
//         break;
//     default:
//         console.log('What day you livin in my boy..?')
// }

//----- Arrays -----
// let colors = ['Red' , 'White' , 'Blue'];
// let colorsNested = [['Red' , 'White' , 'Blue'], ['Red', 'Green', 'Blue']];

//----- Object Literals -----
// const person = {
//     firstName: 'Michael',
//     lastName: 'Jordan',
//     isGoat: true,
//     netWorth: 1700,
//     famousQuote: 'Some people want it to happen, some wish it would happen, others make it happen.'
// }

//----- For Loops ------
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

//----- Looping Over Arrays -----
//let colors = ['Red' , 'White' , 'Blue'];
// for (let i = 0; i < colors.length; i++) {
//     console.log(i, colors[i])
// }

//----- Nested Loops -----
// for (let i = 1; i<=10; i++) {
//     console.log(`-----Outer is ${i}-----`)
//     for (let j = 1; j <=5; j++){
//         console.log(`Inner is ${j}`)
//     }
// }

//----- While Loops -----
// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }

// let userPassword = 'password';
// let guess = prompt('Please Enter Your Password:').toLowerCase();
// while (guess !== userPassword) {
//     guess = prompt('Incorrect. Please Try Again.').toLowerCase();
// }
// console.log('Password is correct.')

//----- Simple Guessing Game -----
// --- Bug with Quiting the game ---
// let userMax = parseInt(prompt('Enter maximum number.'));
// while (!userMax) {
//     userMax = parseInt(prompt('Please enter a valid number.'))
// }
// const targetNum = Math.floor(Math.random() *userMax) + 1;
// console.log(targetNum);
// let userAttempts = 1;

// let userGuess = parseInt(prompt('Enter your First Guess.'));
// while (parseInt(userGuess) !== targetNum) {
//     if (userGuess === 'q') {
//         break;
//     }
//     userAttempts++;
//     if (userGuess > targetNum) {
//         userGuess = prompt('Too High. Guess Again');
//     } else {
//         userGuess = prompt('Too Low. Guess Again');
//     }
// }
// if(userGuess == 'q') {
//     alert('Quiting Now.')
// } else {
//     alert(`You got it in ${userAttempts} attempts!`)
// }

// ----- For OF Statments -----
// const subreddits = ['Cringe', 'Chickens', 'Cringe', 'Soccer', 'Rule34']
// // --- Using For Loops ---
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit Reddit.com/r/${subreddits[i]}`)
// }
// // --- Using For Of Loop ---
// for (let sub of subreddits) {
//     console.log(`Visit Reddit.com/r/${sub}`)
// }

//----- To Do List Code Along -----
// console.log('"new" - Add a new to do item')
// console.log('"list" - List all to dos')
// console.log('"delete" - Remove specific to do')
// console.log('"quit" - Quit app')

// let firstOption = prompt('What do you want to do?').toLowerCase();
// let toDoList = ['Feed Remi', 'Pick up Poop'];

// while (firstOption !== 'quit' && firstOption !== 'q') {
//     if (firstOption === 'list') {
//         console.log('*****')
//         for (let i = 0; i < toDoList.length; i++) {
//             console.log(`${i}: ${toDoList[i]}`);
//         }
//         console.log('*****')
//     } else if (firstOption === 'new') {
//         newToDo = prompt('What would you like to add to your list?').toLowerCase();
//         toDoList.push(newToDo);
//         console.log(`${newToDo} has been added`)
//     } else if (firstOption === 'delete') {
//         let deleteItem = parseInt(prompt('What index do you want to delete?'));
//         const deleted = toDoList.splice(deleteItem,1);
//         console.log(`Okay, Deleted "${deleted}"`);
//     }
//     firstOption = prompt('What do you want to do?').toLowerCase();
// }
// alert('Quitting App');

//----- Functions ----- 
// function rollDie(sides) {
//     diceRoll = Math.floor(Math.random() * sides) + 1;
//     console.log(`You rolled a ${diceRoll}`);
// }
// rollDie(20);
// rollDie(12);

// function singSong(userPhrase, repeatCount) {
//     let final = '';
//     for (let i = 0; i < repeatCount; i++) {
//         final += userPhrase;
//     }
//     console.log(final)
// }
// singSong('Potatoe', 4)

// function userGreet(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName[0]}. Welcome to my basic webpage! `);
// }

// userGreet('Jesus','Ruelas');

//----- Functions Expression -----
//- Standard Function -
// function add(x,y) {
//     return x + y;
// }
// add(3,4)

//- Function Expression -
// Assigns fucntion to variable, called the same way
// const add = function (x,y) {
//     return x + y;
// }
// add(3,4)

//----- For Each Method ------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     },
// ]

// movies.forEach(function(movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })
// - Less Common Method -
// function print(element) {
//     console.log (element); 
// }
// numbers.forEach(print);

// - More Common Method -
// numbers.forEach(function(el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })
// for (let el of numbers) {
//     console.log(el);
// }

// ----- Map Method -----
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const doubles = numbers.map(function(num) {
//     return num * 2 ;
// })

// console.log(numbers);
// console.log(doubles);

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     },
// ]

// const titles = movies.map(function(movie) {
//     return movie.title;
// })

// console.log(movies);
// console.log(titles);

// ----- Arrow Fuctions -----
// -- Traditional Function Expression --
// const add = function (x, y) {
//  return x + y;
// }

// -- Same Function Expression as Arrow Function --
// -- Multi Parameters --
// const add = (x,y) => {
//     return x + y;
// }
// -- Single Parameter, () optional
// const square = x => {
//     return x * x;
// }
// -- Without Parameters --
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1; 
// }

// ----- Implicit Returns -----
// -- Standard Arrow Function --
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1; 
// }

// -- Implicit Function --
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
// -- Implicit One Liner --
// const add = (a,b) => a + b
// Same as
// const add = (a,b) => {
//     return a + b 
// }

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const newMovies = movies.map(movie => (
//      `${movie.title} - ${movie.score / 10}`
// ))

// setTimeout(() => {
//     alert('Get important coupons, this is not a scam!!')
// }, 3000)

// setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// const evens = numbers.filter(n => (n % 2 === 0)) 

// ----- Reduce Method -----

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50]; 

// -- Old Way --
// let total = 0;
// for (price of prices) {
//     total =+ price
// }

// -- Using Reduce Method --
// prices.reduce((total, price) => {
//     return total + price;;
// })
// --- Default Params ---
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

//  ------ Call Backs -----
// setTimeout( () => {
//     document.body.style.backgroundColor = 'purple';
//     setTimeout( () => {
//         document.body.style.backgroundColor = 'pink';
//         setTimeout( () => {
//             document.body.style.backgroundColor = 'red';
//             setTimeout( () => {
//                 document.body.style.backgroundColor = 'orange';
//                     setTimeout( () => {
//                         document.body.style.backgroundColor = 'yellow';
//                     }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// ----- New Promises -----
// const fakeRequest = (url) => {
//     return new Promise ((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout (() => {
//             if (rand < 0.7) {
//                 resolve('Your Fake Data Here');
//             }
//             reject('Request Error!');
//         },1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then ((data) => {
//     console.log('Done with Request')
//     console.log('data is:', data)
// })
// .catch((err) => {
//     console.log('Oh No!', err)
// })

// ----- async & await funciton -----

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve()
//         }, delay)
//     })
// }

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
// }

// rainbow().then(() => console.log('End of the Rainbow'))

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data ${url}`)
//             }
//         }, delay)
//     })
// }

// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1)
//         let data2 = await fakeRequest('/page2');
//         console.log(data2)
//     } catch (error) {
//         console.log('Caught an Error')
//         console.log(`Error is: ${error}`)
//     }
// }