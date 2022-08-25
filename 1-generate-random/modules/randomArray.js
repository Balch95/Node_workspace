function randomArray (min, max, arrayLength){

    let array = [];

  

    for (var i = 0; i < arrayLength; i++){
        min = Math.ceil(min);
        max = Math.floor(max);
    
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
   
    return array;

}

module.exports = randomArray;