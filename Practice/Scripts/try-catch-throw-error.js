//evalError, InternalError, RangeEroor, 
// ReferenceError, TypeErrror, SyntaxError, URIError

try{
    // throw new Error("A Stick")
    fetch(URL);
}catch(error){
    console.log('Caught', error.name, error.message);
}finally{
    console.log('finally');
}


// Objects
console.log(Object.getOwnPropertyNames(Object))

