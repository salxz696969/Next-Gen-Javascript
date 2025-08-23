// EXERCISE 17: Convert C code to JavaScript - array iteration with condition
// Use appropriate JavaScript features to match the logic and output

/*
C Code:
#include <stdio.h>

int main() {
    int arr[] = {10, 55, 63, 20, 90};
    for (int i = 0; i < 5; i++) {
        if (arr[i] > 50)
            printf("%d\n", arr[i]);
    }
    return 0;
}
*/

// Your JavaScript code here:
let array = [10, 55, 63, 20, 90];
for(let a of array) {
    if(a >  50) {
        console.log(a);
    }
}