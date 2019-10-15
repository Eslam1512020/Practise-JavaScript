// reverse a string first Method
let name = "Eslam";
function reverseString(){
  var arr = Array.from(name);
  console.log(arr.reverse().join(''));
}
reverseString();

// reverse a string (Second Method)

let name = "";
function reverseString(n){
  var arr = Array.from(n);
  console.log(arr.reverse().join(''));
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

  // Capitalize first word of string 

  const name = 'flavio'
const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
capitalize(name)


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


//LONGEST WORD in Array
var name = ["Eslam", "don", "sharron", "johndoe", "jeffhardy", "eslamamin", "unitedstateofamerica"];
var longest = name.reduce(function(a, b) { 
  return a.length > b.length ? a : b
}, '');
console.log(longest);

// // Split an array into chunked arrays of a specific length

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  }
});

console.log(
  [1, 2, 3, 4, 5, 6, 7].chunk(2)
)

//// Take an array of arrays and flatten to a single array
var arrays = [
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [8]
];
var flattenArray = [].concat.apply([], arrays);

console.log(flattenArray);

//Return true if anagram and false if not

function isAnagram(str1, str2) {

  if(str1 === str2) {
    return true;
  }

  let srt1Length = str1.length;
  let srt2Length = str2.length;

  if(srt1Length !== srt2Length) {
    return false;
  }

  var counts = {};

  for(let i = 0; i < srt1Length; i++) {
    let index = str1.charCodeAt(i)-97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for(let j = 0; j < srt2Length; j++) {
    let index = str2.charCodeAt(j)-97;
    if (!counts[index]) { 
      return false; 
    }
    counts[index]--;
    }

  return true;
}
 isAnagram("ali","eslam")