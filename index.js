const fs = require ('fs');

// console.log("hi")
// const data = fs.writeFileSync('note.txt', 12345);
// console.log(data);

// const result = fs.readFileSync('note.txt','utf-8')
// console.log(result,typeof result)
fs.writeFileSync("note.txt","today is our module class")
fs.appendFileSync("note.txt"," and we are learning nodejs") 
const result2 = fs.readFileSync('note.txt','utf-8')
console.log(result2)

