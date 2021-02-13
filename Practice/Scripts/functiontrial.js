// function user_pass() {
//   var a = document.getElementById("username").value;
//   var b = document.getElementById("password").value;

//   if (a == b) {
//     alert("You are being logged in username and password match");
//   } else {
//     alert("Please enter correct username and password.");
//   }
// }


const a = () =>{
    console.log("arrow function")
}

a();
const obj = {
    function () {
        console.log("object function")
    }
}
obj.function('test');

const c = [
    function (m) {
        console.log(m)
    }
]
c[0]('test');

// Factory function example - When a Function returns an object and new keyword is not needed to create the object.
// you can also access inner functions 
// you cannot use prototype with factory function
function personName(firstName, lastName){
    return{
        firstName: firstName,
        lastName:  lastName,
        getFullname(){
            return firstName + ' ' + lastName;
        }
    }
}

let deep = personName('Deependrasingh', 'Shekhawat');
// const kewal = {firstName:'kewal', lastName:'shah'}
let neha = personName('Neha', 'Bais');

console.log(deep.getFullname());
console.log(typeof(neha.getFullname()));


// Constructor fnction

function personDetails(name, age, message = 'Hi'){
    this.name = name;
    this.age = age;
    this.message = message;
    this.getdetails = function getDetails(){
            return this.message + ' '+ this.name + ' ' + this.age;
        }
    
}

let a = new personDetails('deep', 33);

console.log(a.getDetails());

// Function that returns an iterator

function counter(start){
    let nextvalue = Math.round(start);
    return{next: () => {return nextvalue++} }
}

let serialNumberGenerator = counter(1000);

let s = serialNumberGenerator.next()
console.log(s)
let s1 = serialNumberGenerator.next()
console.log(s1)


// prototype example with function saves memory here as function is 
// assigned to prototype and all objects refers the function from there.

function animals(type, name){
    this.abc = type;
    this.name = name;
}

animals.prototype.getAnimals = function() {
    return this.type + this.name;
}

let a = new animals('cat', 'roxy')
let n = new animals('dog', 'jamie')


