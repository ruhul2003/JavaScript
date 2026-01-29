let numbers = [10, 20, 30, 40, 50];
console.log("Original array:", numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// reverse numbers
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log("Reversed Array:", numbers[i]);
}

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors);

let reversed = [];

for (let i = colors.length - 1; i >= 0; i--) {
    reversed.push(colors[i]);
}

console.log("Reversed colors:", reversed);
console.log(reversed.join('+'));
