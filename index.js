const fs = require('fs');
// fs.readFileSync("note.txt","utf-8", (err, data) => {
//     let result = ""
//     if (err) {
//         console.error("Error reading file:", err);
//     }
//     else{
//         result = result + data
//     }
//     fs.writeFileSync("note.txt", result, (err,data) => {
//         if (err) {
//             console.error("Error writing file:", err);
//         } else {
//             console.log("File updated successfully",data);
//         }
//     }
// )
// }
    

// )
const fs = require("fs").promises

fs.readFile("note.txt", "utf-8")
    .then((data)=>console.log(data))
    .catch((err)=>console.error("Error reading file:", err));