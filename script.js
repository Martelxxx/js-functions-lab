/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
// ===============================================================
  /*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const m3 = (x, y, z) => {
    if (x >= y) {
        return x;
    } else if( z >= x) {
        return z;
    } else {
      return y;
    }
}

console.log('Exercise 2 Result:', m3(13, 55, 1));
// ===============================================================
/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const vowelYN = (x) => {
    if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
        return 'True';
    } else {
        return 'False';
    } 
}
console.log('Exercise 3 Result:', vowelYN('a'));
// ===============================================================
/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

const sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('Exercise 4 Result:', sumArray([2, 4, 5]) );
// ===============================================================
/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (arr) => {
    let prod = 1;
    for(let i = 0; i < arr.length; i++) {
        prod *= arr[i];
    }
    return prod;
}
console.log('Exercise 5 Result:', multiplyArray([2, 4, 3]));
// ===============================================================
/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (str) => {
    let newString = '';
    for (let i= str.length - 1; i >= 0; i--) {
    newString += str[i];
}
return newString;
}
console.log('Exercise 6 Result:', reverseString('Pharoah'));
// ===============================================================
/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

const longestStringInArray = (arr) => {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}

console.log('Exercise 7 Result:', longestStringInArray(['ForzaItalia', 'BruttaFrancia', 'InterMerda']));
// ===============================================================
/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

const stringsLongerThan = (arr, length) => {
    let result = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            result[index++] = arr[i];
        }
    }
    return result;
}

console.log('Exercise 8 Result:', stringsLongerThan(['ForzaItalia', 'BruttaFrancia', 'InterMerda'], 10) );
// ===============================================================
/*
Exercise 9: numArgs

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete Exercise 9 in the space below:
*/

const numArgs = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num ++ 
    }
    return num;
}

console.log('Exercise 9 Result:', numArgs(['asd', 'asdf']));