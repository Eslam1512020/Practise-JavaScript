// reverse a string first Method
let name = "Eslam";
function reverseString(){
  var arr = Array.from(name);
  console.log(arr.reverse());
}
reverseString();

// reverse a string (Second Method)
let name = "";
function reverseString(name){
  var arr = Array.from(name);
  console.log(arr.reverse());
}
reverseString('sharron');

// find  A PALINDROME
let name = "dadd"
function palindrome(){
let arr = Array.from(name).reverse().join('');
if (name == arr ){
  console.log("This is a Palindrome")
}else{
  console.log('This is  not a Palindrome')
}
}

palindrome();

//  REVERSE AN INTEGER

let number = 234567
function numToString(){
  stringNumber = number.toString();
  arrNumber = Array.from(stringNumber).reverse().join('');
  console.log(arrNumber)
}
numToString();


//  CAPITALIZE LETTERS

let str = "hello world"
function upperCase(){
let nameUpper = str.toUpperCase();
  console.log(nameUpper)
}
  upperCase();


  //// Return the character that is most common in a string
  let str = "hello worlooood";
  let max = 0
  function maxCharacter(){
  let arrString = Array.from(str).join('');
    for (i = 0; i < arrString.length; i++) {
   if (arrString[i] == 'o')
   max += 1
      console.log(max);
    }
  }
  maxCharacter();

  // FIZZBUZZ
  let number = 15;
function fizzBuzz(){
  if (number % 3 == 0 ){
    console.log("This is Fizz");
  }else if(number % 5 == 0) {
    console.log("This is Buzz")
  }else if(number %5 === 0 && number %3 === 0){
			print('FizzBuzz');
  }else{
    console.log(number)
  }

}
fizzBuzz();

