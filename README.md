# infradigital-test

These are my solutions for the fullstack developer recruitment test at [Infradigital](https://infradigital.io/).

## Problem 1

Write a short program that prints each number from 1 to 100 on a new line.  
For each multiple of 3, print "Fizz" instead of the number.  
For each multiple of 5, print "Buzz" instead of the number.  
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

The solution is [here](src/fizz-buzz.js).

## Problem 2

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9.  
The sum of these multiples is 23.  
Find the sum of all the multiples of 3 or 5 below 1000.

The solution is [here](src/mult-of-3-and-5.js).

## Problem 3

Create a function that will take parameters: paid amount, an array of the bill amount.  
The function will then decide to mark which bills are paid if the paid amount is equal to one or more bills summed amount.  
The function will return an array of bills with a zero-based index or empty array if no match is found.

Example:

Budi had 5 bills with each amount [1000, 3000, 1000, 5000, 10000].  
Based on the example above, this is the expected result from the function

Test case:

1. Paid amount 2000
   mark_paid(2000, [1000, 3000, 1000, 5000, 10000]) will return [0,2]
2. Paid amount 1000
   mark_paid(1000, [1000, 3000, 1000, 5000, 10000]) will return [0]
3. Paid amount 13000
   mark_paid(13000, [1000, 3000, 1000, 5000, 10000]) will return [1,4]
4. Paid amount 16000
   mark_paid(16000, [1000, 3000, 1000, 5000, 10000]) will return [0,3,4]
5. Paid amount 400
   mark_paid(400, [1000, 3000, 1000, 5000, 10000]) will return []
6. Paid amount 25000
   mark_paid(25000, [1000, 3000, 1000, 5000, 10000]) will return []

The solution is [here](src/mark-paid.js).
