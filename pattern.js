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

// ---------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------

// Q4 -> Left Right Triangle Pattern

// let n = 5;
// for ( i = 1; i<=n; i++ ){
//     for ( j = n - 1 ; j>=i; j-- ){
//         process.stdout.write("  ");
//     }
//     for ( k=1; k<=i; k++ ){
//         process.stdout.write("*");
//         process.stdout.write(" ");
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

*/

// ---------------------------------------------------------------------------------------------------

// Q5 -> Pyramid Triangle Pattern 

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

// ---------------------------------------------------------------------------------------------------

// Q6 -> Pyramid Triangle Pattern ( REVERSE )

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

// ---------------------------------------------------------------------------------------------------

// Q7 -> Half Diamond Pattern
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

// ---------------------------------------------------------------------------------------------------

// Q8 -> Diamond Pattern

// let n = 9;
// let mid = Math.floor(n / 2) + 1;

// for (i = 1; i <= n; i++) {
//     if (i <= mid) {
//         for (j = mid; j > i; j--) {
//             process.stdout.write("  ")
//         }
//         for (k = 1; k <= (2 * i) - 1; k++) {
//             process.stdout.write("*")
//             process.stdout.write(" ")
//         }
//     }
//     if (i > mid) {
//         for (l = i; l > mid ;l--) {
//             process.stdout.write("-")
//             process.stdout.write(" ")
//         }
//         for(    ){ *INCOMPLETE*

//         }
//     console.log()
// }

// ---------------------------------------------------------------------------------------------------

// Q9 Write a program to print hollow square. 

// let n = 5;

// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= n; j++) {
//     if (i == 1 || j == 1 || i == 5 || j == 5) {
//       process.stdout.write(" ")
//       process.stdout.write("*")
//     } else {
//       process.stdout.write("  ")
//     }
//   }
//   console.log()
// }

/*

// OUTPUT - 

* * * * *
*       *
*       *  
*       *  
* * * * *
 

*/

// ---------------------------------------------------------------------------------------------------

// Q10 - Write a program to print a hollow rectangle. 

// let n = 6;

// for ( i = 1 ; i<=n; i++ ){
//   for ( j = 1 ; j<=n+2; j++ ){
//     if ( i == 1 || i == n || j== 1 || j == n+2 ){
//       process.stdout.write("*")
//     }else{
//       process.stdout.write(" ")
//     }
//   }
//   console.log()
// }

/*

OUTPUT - 

********
*      *
*      *
*      *
*      *
********

*/

// ---------------------------------------------------------------------------------------------------

// Q11 - Write a program to print a hollow triangle. 

// let n = 5;

// for (i = 1; i <= n; i++) {
//   for (j = n; j >= i + 1; j--) {
//     process.stdout.write(" ");
//   }
//   for (k = 1; k <= (2 * i) - 1; k++) {
//     if ((i == 1) || (i == n) || (j == 1) || (j == (2 * i) - 1)) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log()
// }

/*

OUTPUT - 

//     *
//    * *
//   *   *
//  *     *
// *********

*/

// ---------------------------------------------------------------------------------------------------

// Q12 - Write a function which takes upper pyramid and lower pyramid  as input parameters and prints a diamond.

// function upperD(n) {
//   for (let i = 1; i <= n; i++) {
//       for (j = n - i; j >= 1; j--) {
//           process.stdout.write(" ")
//       }
//       for (k = 1; k <= (2 * i - 1); k++) {
//           process.stdout.write("*");
//       }
//       console.log();
//   }
// }

// upperD(5)

// function lowerD(n) {

//   for (let i = n - 1; i >= 1; i--) {
//       for (j = n; j > i; j--) {
//           process.stdout.write(" ")
//       }
//       for (k = (2 * i) - 1; k >= 1; k--) {
//           process.stdout.write("*");
//       }
//       console.log();
//   }

// }

// // lowerD(5)

// function diamond(n) {

//   upperD(n);
//   lowerD(n);
// }

// diamond(7)

// ---------------------------------------------------------------------------------------------------
