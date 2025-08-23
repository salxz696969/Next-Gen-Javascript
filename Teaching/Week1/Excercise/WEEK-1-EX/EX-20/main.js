// EXERCISE 20: Convert C code to JavaScript - struct array iteration
// Use appropriate JavaScript features to match the logic and output

/*
C Code:
#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student students[3] = {
        {"Alice", 20},
        {"Bob", 22},
        {"Charlie", 21}
    };

    for (int i = 0; i < 3; i++) {
        printf("%s\n", students[i].name);
    }

    return 0;
}
*/

// Your JavaScript code here:
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 22 }
];
for(let s of students) {
    for(let key in s) {
        console.log(key + ":", s[key]);
    } 
    console.log(" ");
}