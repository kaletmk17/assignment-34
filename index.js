
const numbers = [17, 31, 32,91, 65, 20, 10]
let large = numbers[0]

for (const num of numbers) {

    if (num > large) {
       large = num

    }
}
console.log(large);



let sum = 0;
for (const num of numbers)
{
    if (num % 2 == 1)
    {
        sum = sum + num
    }
}
console.log(sum);




const fruits = ['apple', 'peaches', 'lemmon', 'mango', 'papaya']

for (const fruit of fruits)
{
    console.log(`Hello ${fruit}`)
}
