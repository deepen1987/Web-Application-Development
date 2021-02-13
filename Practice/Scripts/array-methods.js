// for each

let a = ['deep', 'neha', 'shakti', 'yash', 'aky'];

a.forEach(element =>{ 
    if(element === 'neha'){
        element = element.toUpperCase();
    }
    console.log(element);
});

let newArray = a.map(function(item, index, array){
        return item.length > 4;

});

console.log(newArray)

let newArray1 = a.filter(function(item, index, array){
    return item.length > 4
})

console.log(newArray1)