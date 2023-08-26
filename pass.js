// primitice types are pass by value

let num1 = 5;
let num2 = 7;

function multuply(a, b){
    a = 27;
    const result =a * b
    return result;
}
console.log(num1)
const output = multuply(num1, num2);
console.log(output);

// object and array are pass by rference
let student1 = {name: 'jalil', partner: 'borsha'};
let student2 = {name:'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'ononto';
    couple2.partner = 'mim';
}
console.log(student1, student2)
makeMovie(student1, student2);
console.log(student1, student2);