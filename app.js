// Vazifa : 1-masala

/*for (let i = 0; i < 10; i++) {
    console.log(`Samandar`); 
}*/

// Vzifa : 2-masala

/* const myArray = [ [false, true], [1, 2], 99, `yaxshi`]



let i = 0

while (i < myArray.length) {
   if (typeof myArray[i] == "string") {
    console.log(i);
   }
   i++
}*/


//  Vazifa : 3-masala

const data = [ [1, 2, 3], "qizil", [4, 5, 6],  true, false]
const newArray = []
let i = 0
while (i < data.length) {
    if (typeof data[i] == "object") {
        newArray.push(data[i])
    }
    i++
}
console.log(newArray);