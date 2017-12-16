


function fizzBuzz(value){
    
//     for(var i=1; i <= 200; i++ ) {
//         var j = i % 3;
//         var k = i % 5;

//         if (j === 0 && k === 0) {
//             console.log("FizzBuzz");
//         }
//         else if(j === 0) {
//             console.log("Fizz");
//         }

//         else if (k === 0) {
//             console.log("Buzz");
//         }

//         else {
//             console.log(i)
//         }
//     }
    if(value % (3*5) === 0){
        return "FizzBuzz"
    }
    else if(value % 3 === 0){
        return "Fizz";
    }
    else if(value % 5 == 0){
        return "Buzz"; 
    }
    return value;


    
 }







test('value 1 should return 1 ',function(){
    expect (fizzBuzz(1)).toEqual(1);
  });

test('value 2 should return 2 ',function(){
    expect (fizzBuzz(2)).toEqual(2);
  });

test('value 3 should return fizz ',function(){
    expect (fizzBuzz(3)).toEqual('Fizz');
  });
test('value 6 should return fizz ',function(){
    expect (fizzBuzz(6)).toEqual('Fizz');
  });
test('value 5 should return Buzz ',function(){
    expect (fizzBuzz(5)).toEqual('Buzz');
  });
test('value 10 should return Buzz ',function(){
    expect (fizzBuzz(10)).toEqual('Buzz');
  });
test('value 15 should return FizzBuzz ',function(){
    expect (fizzBuzz(15)).toEqual('FizzBuzz');
  });

