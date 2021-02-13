/* CS601 - A1 
    Deependrasingh Shekhawat 
    JavaScript HW-3*/

//Function 1 to arrow function
// function addOne(value) { return (1 + value); }

let a = (value) => 1 + value;

console.log(a(1));


//Function 2 to arrow function
// function returnPair(evenVal) { return { evenVal: evenVal, oddVal: evenVal+1};}

let b = (evenVal) => { return{evenVal: evenVal, oddVal: evenVal + 1};}

console.log(b(2));


//Function 3 to arrow function
// function sum(a,b) { return (a+b); };

let c = (a,b) => {return (a + b);}

console.log(c(4, 5));

//Function 4 to arrow function
// function double(val) { return (val * val); }

let d = (val) => { return (val * val);}

console.log(d(7));
