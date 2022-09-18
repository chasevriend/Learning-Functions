//Function Declaration
//function sayHello() {
//    console.log("Hello");
//}

//sayHello();

//Function Expression
//var sayBye = function() {
//    console.log("Bye");
//}

//sayBye();


function checkDriverAge(age) {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();