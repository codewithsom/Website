const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// console.log("Finished reading files");

// fs.writeFile('file2.txt', "This is a date",()=>{
//     console.log("Written to the file")
// });

b = fs.writeFileSync('file2.txt', "This is a D2")
console.log(b)
console.log("Finished reading file")