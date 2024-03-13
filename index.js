function division() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    const result = num1 / num2;

    if (isFinite(result)) {
        document.write("<h1> Result is :</h1> " + result);
    } else {
        alert("Error: Infinite division result!");
    }
}













function evenOdd (){
let choice = prompt("Enter 'odd' or 'even' to display numbers ");

let range = prompt("Enter the range (how many numbers):");
range = parseInt(range);

if (choice.toLowerCase() === 'odd') {
document.write("Odd numbers from 1 to " + range + `: <br>`);
for (var i = 1; i <= range; i++) {
if (i % 2 !== 0) {
 document.write(`<br>` + i);
}
}
} else if (choice.toLowerCase() === 'even') {
document.write("Even numbers from 1 to "+ range + `: <br>`);
for (var i = 1; i <= range; i++) {
if (i % 2 === 0) {
    document.write(`<br>` + i);  
}
}
} else {
document.write("Invalid choice! Please enter 'odd' or 'even'.");
}
}