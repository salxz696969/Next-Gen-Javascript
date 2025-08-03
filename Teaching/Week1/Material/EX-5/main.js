// Demo EX-5: C to JavaScript Conversion - Logical Operators
// Original C Code:
/*
#include <stdio.h>

int main() {
    int isLoggedIn = 1; // true
    int isAdmin = 0;    // false

    if (isLoggedIn && isAdmin) {
        printf("Access granted\n");
    } else {
        printf("Access denied\n");
    }

    if (!isAdmin) {
        printf("Not an admin\n");
    }

    return 0;
}
*/

// JavaScript Implementation:
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

if (!isAdmin) {
  console.log("Not an admin");
}

// Display output in the page
let output = "";
if (isLoggedIn && isAdmin) {
  output += "Access granted\n";
} else {
  output += "Access denied\n";
}

if (!isAdmin) {
  output += "Not an admin";
}

document.getElementById("output").innerHTML = output;
