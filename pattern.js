// Here i am gonna practice the "PATTERN" Questions

// Q1 -> Right Angled Triangle Pattern

// let n = 6;
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write("*")
//     }
//     console.log();
// }

/*

OUTPUT -

*
* *
* * *
* * * *
* * * * *
* * * * * *

*/

// Q2 -> Right Angled Triangle Pattern (Reverse)

// let n = 5 ;
// for (i = 1; i <= n; i++) {
//     for (j = i; j <= n; j++) {
//         process.stdout.write("*")
//     }
//     console.log(" ")
// }

/*

OUTPUT -

* * * * *
* * * *
* * *
* *
*

*/


// Q3 -> Right Angled Triangle Pattern (Reverse(Reverse))

// let n = 5;
// for (i = 1; i <= n; i++) {
//     for (j = n; j >= 1; j--) {
//         process.stdout.write("*")
//     }
//     console.log()
// }

/*

OUTPUT - 

* * * * *
  * * * *
    * * *
      * *
        *

*/


// Q4 -> Pyramid Triangle Pattern 

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     for (j = n - i; j >= 1; j--) {
//         process.stdout.write(" ")
//     }
//     for (k = 1; k <= (2 * i - 1); k++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }

/*

OUTPUT - 
 
       * 
     * * *
    * * * * *
  * * * * * * *
* * * * * * * * *  

*/

// Q5 -> Pyramid Triangle Pattern ( REVERSE )

// let n = 5;

// for (let i = n; i >= 1; i--) {
//     for (j = 5; j > i; j--) {
//         process.stdout.write(" ")
//     }
//     for (k = (2 * i) - 1; k >= 1; k--) {
//         process.stdout.write("*");
//     }
//     console.log();
// }

/*

OUTPUT - 

* * * * * * * * *
  * * * * * * *
    * * * * *
      * * * 
        *  

*/

// Q6 -> Half Diamond Pattern
// let n = 9;
// let mid = Math.floor(n / 2) + 1;

// for (i = 1; i <= n; i++) {
//     if (i <= mid) {
//         for (j = 1; j <= i; j++) {
//             process.stdout.write("* ")
//         }
//     }
//     if (i > mid) {
//         for (k = (n - i) + 1; k >= 1; k--) {
//             process.stdout.write("* ")
//         }
//     }
//     console.log()
// }

/*

OUTPUT - 

*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*


*/



