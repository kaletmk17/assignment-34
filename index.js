
const numbers = [17, 31, 32,91, 65, 20, 10]
let large = numbers[0]

for (const num of numbers) {

    if (num > large) {
       large = num

    }
}
console.log(large);
